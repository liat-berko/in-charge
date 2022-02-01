import { ModuleWithProviders, NgModule } from '@angular/core';

import { AlertListComponent } from './components/alert-list.component';
import { AlertRoutingModule } from './alert-routing.module';

const COMPONENTS = [AlertListComponent];

const COMPONENTS_NOROUNT: any[] = [];

@NgModule({
  imports: [AlertRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: [...COMPONENTS_NOROUNT],
})
export class AlertModule {
  static forRoot(): ModuleWithProviders<AlertModule> {
    return {
      ngModule: AlertModule,
      providers: [],
    };
  }
}
