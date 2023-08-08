import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosSavingService } from './features/todos/services/todos-saving.service.ts.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosSavingService],
})
export class AppRoutingModule {}
