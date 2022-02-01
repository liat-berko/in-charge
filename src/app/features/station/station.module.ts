import { NgModule } from '@angular/core';
import { StationRoutingModule } from './station-routing.module';

const COMPONENTS = [
  // StationListComponent,
  // ActionBarComponent,
  // OpenToPublicPopupComponent,
  // StationListHeaderComponent,
  // ScheduleComponent,
  // StationDetailsComponent,
  // TimelineSubMenuComponent
];

const COMPONENTS_NOROUNT = [
  // OpenToPublicPopupComponent,
  // ChargeNowPopupComponent,
  // TimelineSubMenuComponent
  // TODO: StationEditorComponent
];

@NgModule({
  imports: [StationRoutingModule],
  // declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  // entryComponents: [...COMPONENTS_NOROUNT],
})
export class StationModule {}
