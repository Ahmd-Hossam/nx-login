import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@duncanhunter/material';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LayoutComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
