import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthModule, authRoutes } from '@duncanhunter/auth';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShardModule } from '@duncanhunter/shard';
import { LayoutLModule } from '@duncanhunter/layout-l';
import { AuthGuard } from '@duncanhunter/auth'; // added
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'products' }, // added
      { path: 'auth', children: authRoutes },
      {
        path: 'products',
        loadChildren: () =>
          import('@duncanhunter/products').then((m) => m.ProductsModule),
        canActivate: [AuthGuard],
      },
    ]),
    AuthModule, // added
    BrowserAnimationsModule,
    ShardModule,
    LayoutLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
