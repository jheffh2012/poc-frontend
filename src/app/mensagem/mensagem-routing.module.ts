import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMensagemComponent } from './list-mensagem/list-mensagem.component';

const routes: Routes = [
    { path: "", component: ListMensagemComponent }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
    ],
  exports: [
      RouterModule
    ]
})
export class MensagemRoutingModule { }
