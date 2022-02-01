import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HostSettingsFacade } from 'src/app/core/store/host-settings/host-settings.facade';

@Component({
  selector: 'hosts-details-view',
  templateUrl: './hosts-details-view.component.html',
  styleUrls: ['./hosts-details-view.component.scss'],
})
export class HostsDetailsViewComponent implements OnInit {
  isSimple: boolean = false;
  //@ViewChild('viewContainer', { read: ViewContainerRef }) container: any;
  //componentRef: ComponentRef<HostSettingsComponent>;
  constructor(private facade: HostSettingsFacade) {
    // const factory: ComponentFactory<HostSettingsComponent> =
    //   this.resolver.resolveComponentFactory(HostSettingsComponent);
    // this.componentRef = this.container.createComponent(factory);
    //this.componentRef.instance.output.subscribe((event: any) => console.log(event));
  }

  ngOnInit(): void {}

  addNewComp() {
    this.facade.addView(2); //new comp level in config is 2
  }
}
