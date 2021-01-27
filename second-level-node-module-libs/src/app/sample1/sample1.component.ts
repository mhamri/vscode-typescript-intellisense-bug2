import { Component, Input, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { interval, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListService } from './list.service';
import { ComponentState } from './Models/ComponentState.state';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.scss'],
})
export class Sample1Component
  extends RxState<ComponentState>
  implements OnInit {
  refreshIntervalSubscription: any;
  expandChanges = new Subject();

  resetRefreshInterval() {
    this.expandChanges.pipe(tap);
    this.refreshIntervalSubscription = interval(this.get('refreshInterval'))
      .pipe(tap((x) => this.listService.Refetch()))
      .subscribe();
  }
  model$ = this.select();

  _initialState: ComponentState = {
    list: [],
    listExpanded: false,
    refreshInterval: 50,
  };

  @Input() set refreshInterval(refreshInterval) {
    if (refreshInterval > 100) {
      this.set({ refreshInterval });
      this.resetRefreshInterval();
    }
  }

  constructor(private listService: ListService) {
    super();
    this.set(this._initialState);
    this.connect('listExpanded', this.listExpandChanges);
  }

  ngOnInit(): void {}
}
