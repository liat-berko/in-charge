import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ViewsContainer } from 'src/app/models/app.model';

@Component({
  selector: 'view-header-base',
  templateUrl: './view-header-base.component.html',
  styleUrls: ['./view-header-base.component.scss'],
})
export class ViewHeaderBaseComponent implements OnChanges {
  @Input() viewsContainer!: ViewsContainer;
  @Input() navigationView!: number[];
  @Output() navigationChangeEmitter: EventEmitter<number> = new EventEmitter();
  navigationBar: { key: number; value: string }[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.navigationBar = this.navigationView.map((x) => {
      return { key: x, value: this.viewsContainer[x].title };
    });
  }
  selectedNav(level: number) {
    this.navigationChangeEmitter.emit(level);
  }
}
