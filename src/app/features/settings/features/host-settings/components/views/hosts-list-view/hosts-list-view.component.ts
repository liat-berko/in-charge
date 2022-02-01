import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HostSettingsComponent } from '../..//host-settings.component';

@Component({
  selector: 'hosts-list-view',
  templateUrl: './hosts-list-view.component.html',
  styleUrls: ['./hosts-list-view.component.scss'],
})
export class HostsListViewComponent implements OnInit {
  isSimple: boolean = false;
  //@ViewChild('viewContainer', { read: ViewContainerRef }) container: any;
  //componentRef: ComponentRef<HostSettingsComponent>;
  constructor(private resolver: ComponentFactoryResolver) {
    // const factory: ComponentFactory<HostSettingsComponent> =
    //   this.resolver.resolveComponentFactory(HostSettingsComponent);
    // this.componentRef = this.container.createComponent(factory);
    //this.componentRef.instance.output.subscribe((event: any) => console.log(event));
  }

  ngOnInit(): void {}
}
