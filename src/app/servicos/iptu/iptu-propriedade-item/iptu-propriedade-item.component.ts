import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ServicosService } from '../../servicos.service';
import { Propriedade } from '../propriedade.model';

@Component({
  selector: 'iptu-propriedade-item',
  templateUrl: './iptu-propriedade-item.component.html',
  styleUrls: ['./iptu-propriedade-item.component.scss']
})
export class IptuPropriedadeItemComponent {

  @Input("propriedade") propriedade: Propriedade | undefined;

  @Output()
  onEmitirBoleto: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  emitirBoleto = (valor: string |undefined, data: string | undefined) => {
    this.onEmitirBoleto.emit(`{"valor": "${valor}", "data": "${data}", "codigo": "${this.propriedade?.codigo}"}`)
  }

}
