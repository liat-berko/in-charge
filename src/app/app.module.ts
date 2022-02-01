import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMenuService } from './core/services/app-panel.service';
import { MaterialModule } from './material.module';
import { AppSideMenuComponent } from './components/app-side-menu/app-side-menu.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appReducer as App } from './core/store/app/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './core/store/app/app.effect';
import { AppFacade } from './core/store/app/app.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, AppSideMenuComponent, AppHeaderComponent],
  imports: [
    StoreModule.forRoot({ App }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [AppMenuService, AppFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
