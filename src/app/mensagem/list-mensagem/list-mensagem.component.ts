import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../mensagem.model';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-list-mensagem',
  templateUrl: './list-mensagem.component.html',
  styleUrls: ['./list-mensagem.component.scss']
})
export class ListMensagemComponent implements OnInit {

  public mensagens: Mensagem[] = [];

  constructor(
    protected mensagemService: MensagemService
  ) { }

  ngOnInit(): void {
    this.buscarMensagens();
  }

  buscarMensagens = (fila: string = '') => {
    if (fila) {
      this.mensagemService.getMensagensPorFila(fila)
        .toPromise()
        .then(
          (mensagens: Mensagem[]) => {
            this.mensagens = mensagens;
            console.log(mensagens);
            console.log(this.mensagens);
          }
        );
    } else {
      this.mensagemService.getMensagens()
        .toPromise()
        .then((mensagens: Mensagem[]) => {
          this.mensagens = mensagens;
        }
      )
    }
  }
}
