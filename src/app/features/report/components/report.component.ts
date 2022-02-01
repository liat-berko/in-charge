import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
})
export class ReportComponent {
  constructor(private resolver: ComponentFactoryResolver) {
    // default values:
    // this.params.timeRange = TimeRange.CURRENT_MONTH;
  }
}
