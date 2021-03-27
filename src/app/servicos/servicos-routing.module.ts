import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IptuComponent } from './iptu/iptu.component';

const routes: Routes = [
    { path: "iptu", component: IptuComponent }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
    ],
  exports: [
      RouterModule
    ]
})
export class ServicosRoutingModule { }
