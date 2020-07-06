import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graphics1Component,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    DashboardComponent,
    Graphics1Component,
    ProgressComponent
  ]
})
export class PagesModule { }
