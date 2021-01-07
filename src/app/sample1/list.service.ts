import { Injectable } from '@angular/core';
import { DemoBasicItem } from './Models/DemoBasicItem.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  Refetch(): DemoBasicItem[] {
    return [{ id: Date.now().toString(), name: Date.now().toFixed() }];
  }

  constructor() {}
}
