import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';

@NgModule({
  declarations: [AddButtonComponent, RemoveButtonComponent],
  imports: [CommonModule],
  exports: [AddButtonComponent, RemoveButtonComponent],
})
export class SharedModule {}
