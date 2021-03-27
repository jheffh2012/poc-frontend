import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mensagem',
    loadChildren: () => import('src/app/mensagem/mensagem.module').then(
      (mensagem) => mensagem.MensagemModule
    )
  },
  {
    path: 'servicos',
    loadChildren: () => import('src/app/servicos/servicos.module').then(
      (servico) => servico.ServicosModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
