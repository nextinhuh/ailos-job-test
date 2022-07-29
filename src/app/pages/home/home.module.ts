import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AdmissionComponent } from './admission/admission.component';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/modules/material.modules';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AdmissionComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
