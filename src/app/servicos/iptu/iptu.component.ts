import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicosService } from '../servicos.service';
import { Propriedade } from './propriedade.model';

@Component({
  selector: 'app-iptu',
  templateUrl: './iptu.component.html',
  styleUrls: ['./iptu.component.scss']
})
export class IptuComponent implements OnInit {

  public form: FormGroup;
  public viewResultado: boolean = false;
  public propriedades: Propriedade[] = [];

  constructor(
    protected formBuilder: FormBuilder,
    protected servico: ServicosService,
    protected router: Router
  ) {
    this.form = this.formBuilder.group({
      documento: [null, Validators.required],
      tipoDocumento: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit = () => {
    this.servico.buscarPropriedades(
      this.form.controls["tipoDocumento"].value, 
      this.form.controls["documento"].value)
      .toPromise()
      .then((resultado) => {
        this.form?.reset();
        this.propriedades = resultado;
        this.viewResultado = true;
      });
  }

  emitirBoleto = (dados: any) => {
    this.servico.GerarNumeroBoleto(dados)
      .toPromise()
      .then(e => {
        this.router.navigate(["mensagem"]);
      })
  }
}
