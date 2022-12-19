import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@duncanhunter/material'; // Added
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component'; // Added

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutLModule {}
