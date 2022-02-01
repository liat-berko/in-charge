import { Component, OnInit } from '@angular/core';
import { AppFacade } from 'src/app/core/store/app/app.facade';
import { HostSettingsFacade } from 'src/app/core/store/host-settings/host-settings.facade';
import { ViewsContainer } from 'src/app/models/app.model';
import { AddHostViewComponent } from './views/add-host-view/add-host-view.component';
import { HostsDetailsViewComponent } from './views/hosts-details-view/hosts-details-view.component';
import { HostsListViewComponent } from './views/hosts-list-view/hosts-list-view.component';

@Component({
  selector: 'host-settings',
  templateUrl: './host-settings.component.html',
  styleUrls: ['./host-settings.component.scss'],
})
export class HostSettingsComponent implements OnInit {
  isSimple = false;
  viewsContainer: ViewsContainer = {
    [0]: {
      level: 0,
      title: 'dynamic list view',
      tabLevel: 0,
      componentType: HostsListViewComponent,
    },
    [1]: {
      level: 1,
      title: 'dynamic details view',
      tabLevel: 0,
      componentType: HostsDetailsViewComponent,
    },
    [2]: {
      level: 2,
      title: 'Add new',
      componentType: AddHostViewComponent,
    },
    [3]: {
      level: 3,
      title: 'Add new222',
      componentType: HostsDetailsViewComponent,
    },
  };
  navigationView!: number[];

  constructor(private facade: HostSettingsFacade) {
    //  console.log('xxxxxxxxxxxx', this.viewItems);
    this.facade.navigationView$.subscribe((x) => {
      this.navigationView = [...x];
      console.log('xxxxxxxxxxxx', x);
    });
  }

  ngOnInit(): void {
    //  console.log(this.viewItems)
  }

  public tabSelectedChangeEmitter(event: any) {
    this.facade.changeView(event);
  }

  public navigationChangeEmitter(event: any) {
    this.facade.deleteView(event);
  }
}
