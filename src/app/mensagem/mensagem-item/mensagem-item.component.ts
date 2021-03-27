import { Component, Input, OnInit } from '@angular/core';
import { Mensagem } from '../mensagem.model';

@Component({
  selector: 'app-mensagem-item',
  templateUrl: './mensagem-item.component.html',
  styleUrls: ['./mensagem-item.component.scss']
})
export class MensagemItemComponent implements OnInit {

  @Input("mensagem") mensagem: Mensagem | undefined;

  public dadosMensagem: any;

  constructor() { }
  ngOnInit(): void {
    if (this.mensagem) {
      this.dadosMensagem = JSON.parse(this.mensagem.texto);
    }
  }

}
