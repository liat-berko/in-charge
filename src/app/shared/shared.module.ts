import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ViewContainerBaseComponent } from './components/view-container-base/view-container-base.component';
import { ViewHeaderBaseComponent } from './components/view-header-base/view-header-base.component';
import { ComponentItemDirective } from './directives/component-item.directive';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [
    ViewContainerBaseComponent,
    ViewHeaderBaseComponent,
    ComponentItemDirective,
  ],
  exports: [
    ViewContainerBaseComponent,
    ViewHeaderBaseComponent,
    ComponentItemDirective,
  ],
})
export class SharedModule {}
