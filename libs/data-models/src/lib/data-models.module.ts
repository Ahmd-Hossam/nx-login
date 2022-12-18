import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export { Authenticate } from './authanticate/authenticate';
export { User } from './authanticate/user';
@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
