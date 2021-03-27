import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';

import { IptuComponent } from './iptu/iptu.component';
import { ServicosRoutingModule } from './servicos-routing.module';

@NgModule({
  declarations: [IptuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServicosRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ServicosModule { }
