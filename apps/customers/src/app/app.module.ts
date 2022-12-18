import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthModule } from '@duncanhunter/auth';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShardModule } from '@duncanhunter/shard';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule,
    BrowserAnimationsModule,
    ShardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
