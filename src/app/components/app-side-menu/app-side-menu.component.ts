import { Component, Input, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/core/services/app-panel.service';
import { onSideNavChange, animateText } from '../../animations/animation';

import { Observable, of } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

const data = {
  menu: [
    {
      text: 'Primary navigation',
      i18n: 'menu.main',
      group: true,
      hideInBreadcrumb: true,
      children: [
        {
          text: 'Dashboard',
          i18n: 'menu.dashboard',
          icon: 'anticon anticon-menu-dashboard',
          link: '/dashboard',
        },
        {
          text: 'Chargers',
          i18n: 'menu.station',
          icon: 'anticon anticon-menu-chargers',
          link: '/station',
          acl: {
            ability: [
              'FIND_DASHBOARD_OPERATOR',
              'FIND_RESERVATIONS',
              'FIND_STATION_OPERATOR',
              'FIND_CARD_OPERATOR',
            ],
            mode: 'allOf',
          },
        },
        {
          text: 'Vehicles / Drivers',
          i18n: 'menu.vehicles/drivers',
          icon: 'anticon anticon-menu-drivers',
          link: '/vehicle',
          acl: {
            ability: [
              'FIND_DRIVER_CHARGING_STATISTICS',
              'FIND_DRIVER_CHARGING_HISTORY',
              'FIND_CARD_OPERATOR',
              'FIND_CUSTOMER_OPERATOR',
              'DEPARTMENTS_FIND',
              'FIND_CUSTOMER_DRIVER',
            ],
            mode: 'allOf',
          },
        },
        {
          text: 'Alerts',
          i18n: 'menu.alerts',
          icon: 'anticon anticon-menu-alerts',
          link: '/alerts',
          acl: {
            ability: ['FIND_AMS_OPERATOR'],
            mode: 'allOf',
          },
        },
        {
          text: 'Energy Planning',
          i18n: 'menu.energy-planning',
          icon: 'anticon anticon-menu-energyPlaning',
          link: '/energy-planning',
        },
        {
          text: 'Report',
          i18n: 'menu.report',
          icon: 'anticon anticon-book',
          link: '/report',
          acl: {
            ability: ['FIND_DRIVER_CHARGING_HISTORY'],
            mode: 'allOf',
          },
        },
        {
          text: 'Locations',
          key: 'locations',
          i18n: 'menu.locations',
          icon: 'anticon anticon-control',
          link: '/locations',
          acl: {
            ability: ['EDIT_SITE'],
            mode: 'allOf',
          },
        },
        {
          text: 'Settings',
          i18n: 'menu.settings',
          icon: 'anticon anticon-menu-settings',
          acl: {
            ability: [
              'FIND_PROPERTY',
              'EDIT_PROPERTY',
              'FIND_SITE',
              'EDIT_SITE',
              'FIND_CUSTOMER_OPERATOR',
              'DEPARTMENTS_FIND',
              'FIND_HOST_DRIVER_TARIFF',
            ],
            mode: 'oneOf',
          },
          children: [
            {
              text: 'Vehicles / Drivers',
              i18n: 'menu.vehicles/drivers',
              link: '/settings/vehicle',
              acl: {
                ability: ['FIND_CUSTOMER_OPERATOR', 'DEPARTMENTS_FIND'],
                mode: 'allOf',
              },
            },
            {
              text: 'Pricing',
              key: 'settings-pricing',
              i18n: 'menu.pricing',
              link: '/settings/pricing',
              acl: {
                ability: ['FIND_HOST_DRIVER_TARIFF'],
                mode: 'allOf',
              },
            },
          ],
        },
      ],
    },
  ],
};

const menuData: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: 'people',
    link: '/dashboard',
  },
  {
    name: 'Settings',
    icon: 'people',
    children: [
      {
        name: 'Host',
        icon: 'people',
        link: '/settings/hosts',
      },
      {
        name: 'Location',
        icon: 'people',
        link: '/settings/locations',
      },
    ],
  },
];

interface MenuItem {
  link?: string;
  name: string;
  icon: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './app-side-menu.component.html',
  styleUrls: ['./app-side-menu.component.scss'],
  animations: [onSideNavChange, animateText],
})
export class AppSideMenuComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  public sideNavState: boolean = false;
  public linkText: boolean = true;
  panelOpenState = false;
  menuList$: Observable<MenuItem[]>;

  constructor(private _sidenavService: AppMenuService) {
    this.menuList$ = of(menuData);
  }

  ngOnInit() {}

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }
}
