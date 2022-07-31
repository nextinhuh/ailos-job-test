import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AdmissionComponent } from './admission/admission.component';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/modules/material.modules';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdmissionComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ]
})
export class HomeModule { }
