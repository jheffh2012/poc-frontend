import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { IptuComponent } from './iptu/iptu.component';
import { ServicosRoutingModule } from './servicos-routing.module';
import { IptuPropriedadesListComponent } from './iptu/iptu-propriedades-list/iptu-propriedades-list.component';
import { IptuPropriedadeItemComponent } from './iptu/iptu-propriedade-item/iptu-propriedade-item.component';

@NgModule({
  declarations: [IptuComponent, IptuPropriedadesListComponent, IptuPropriedadeItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServicosRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class ServicosModule { }
