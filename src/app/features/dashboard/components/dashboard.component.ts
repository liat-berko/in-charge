import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  design = false;

  private unsubscribe$ = new Subject<void>();

  // @ViewChild(CdkDropList, { static: true }) private placeholder!: CdkDropList;
  //   @ViewChild('header', {static: true}) header!: DashboardHeaderComponent;
  //  @ViewChildren(DashboardDDContainerComponent) private containers!: QueryList<DashboardDDContainerComponent>;

  constructor(private cdr: ChangeDetectorRef) {}

  addFirstComponent() {}

  addSecondComponent() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
