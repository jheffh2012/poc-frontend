import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-iptu',
  templateUrl: './iptu.component.html',
  styleUrls: ['./iptu.component.scss']
})
export class IptuComponent implements OnInit {

  public form: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected servico: ServicosService
  ) {
    this.form = this.formBuilder.group({
      documento: [null, Validators.required],
      tipoDocumento: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit = () => {
    this.servico.GerarNumeroBoleto(this.form.getRawValue())
      .then((resultado) => {
        console.log(resultado);
        this.form?.reset();
      })
  }
}
