import { Component } from '@angular/core';
import { onMainContentChange } from './animations/animation';
import { AppMenuService } from './core/services/app-panel.service';
import { AppFacade } from './core/store/app/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange],
})
export class AppComponent {
  title = 'ic-portal';
  showFiller = false;
  public onSideNavChange: boolean = false;

  constructor(
    private _sidenavService: AppMenuService,
    private facade: AppFacade
  ) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      console.log(res);
      this.onSideNavChange = res;
    });

    this.facade.appViews$.subscribe((x) => {
      console.log('App subscription');
    });
  }
}
