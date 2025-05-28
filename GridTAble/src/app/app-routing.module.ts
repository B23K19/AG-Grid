import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridTComponent } from './grid-t/grid-t.component';

const routes: Routes = [
  {
    path: '',
    component: GridTComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
