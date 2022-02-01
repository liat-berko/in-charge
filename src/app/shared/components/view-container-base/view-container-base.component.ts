import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { View, ViewsContainer } from 'src/app/models/app.model';

@Component({
  selector: 'app-view-container-base',
  templateUrl: './view-container-base.component.html',
  styleUrls: ['./view-container-base.component.scss'],
})
export class ViewContainerBaseComponent implements OnChanges {
  isSimple: boolean = true;
  currentView!: any;
  currentViews: View[] = [];
  @Input() viewsContainer!: ViewsContainer;
  @Input() navigationView!: number[];
  @Output() tabSelectedChangeEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    const currentNavIndex = this.navigationView[this.navigationView.length - 1];

    if (this.viewsContainer[currentNavIndex].tabLevel === undefined) {
      //simple view
      this.isSimple = true;
      this.currentView =
        this.viewsContainer![
          this.navigationView[this.navigationView.length - 1]
        ].componentType;
    } else {
      //tabs view
      this.isSimple = false;
      this.currentViews = Object.values(this.viewsContainer).filter(
        (value: View) =>
          value.tabLevel === this.viewsContainer[currentNavIndex].tabLevel
      );
    }
  }

  propsToArray<T>(obj: { [index: number]: T }) {
    return Object.keys(obj).map((prop: any) => obj[prop]);
  }

  onTabSelectedTabChange(changeEvent: any) {
    this.currentView = this.viewsContainer![changeEvent.index];
    this.tabSelectedChangeEmitter.emit(changeEvent.index);
  }
}
