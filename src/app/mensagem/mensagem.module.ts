import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { MensagemItemComponent } from './mensagem-item/mensagem-item.component';
import { ListMensagemComponent } from './list-mensagem/list-mensagem.component';
import { MensagemRoutingModule } from './mensagem-routing.module';

@NgModule({
  declarations: [
    MensagemItemComponent,
    ListMensagemComponent
  ],
  imports: [
    CommonModule,
    MensagemRoutingModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class MensagemModule { }
