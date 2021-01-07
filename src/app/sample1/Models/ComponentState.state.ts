import { DemoBasicItem } from './DemoBasicItem.model';

export interface ComponentState {
  refreshInterval: number;
  list: DemoBasicItem[];
  listExpanded: Boolean;
}
