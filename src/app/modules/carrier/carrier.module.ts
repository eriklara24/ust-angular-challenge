import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './views/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackageDetailComponent } from './components/package-detail/package-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    PackageDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class CarrierModule { }
