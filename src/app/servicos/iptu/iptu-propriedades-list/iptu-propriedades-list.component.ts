import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicosService } from '../../servicos.service';
import { Propriedade } from '../propriedade.model';

@Component({
  selector: 'iptu-propriedades-list',
  templateUrl: './iptu-propriedades-list.component.html',
  styleUrls: ['./iptu-propriedades-list.component.scss']
})
export class IptuPropriedadesListComponent {


  @Input("propriedades") propriedades: Propriedade[] = [];

  @Output()
  onEmitirBoleto: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  emitirBoleto = (valor: any) => {
    console.log(valor);
    this.onEmitirBoleto.emit(valor);
  }

}
