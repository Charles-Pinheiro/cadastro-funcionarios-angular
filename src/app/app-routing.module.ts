import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioReadDetailComponent } from './components/funcionario/funcionario-read-detail/funcionario-read-detail.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'funcionarios',
    component: FuncionarioCrudComponent,
  },
  {
    path: 'funcionarios/registrar',
    component: FuncionarioCreateComponent,
  },
  {
    path: 'funcionarios/:id',
    component: FuncionarioReadDetailComponent,
  },
  {
    path: 'funcionarios/editar/:id',
    component: FuncionarioUpdateComponent,
  },
  {
    path: 'funcionarios/excluir/:id',
    component: FuncionarioDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
