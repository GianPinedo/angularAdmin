import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersComponent } from './employers.component';

const routes: Routes = [
  {
    path: '',
    component: EmployersComponent,
    data: {
      title: 'Employers',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployersRoutingModule {}

