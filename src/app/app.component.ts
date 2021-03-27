import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

class Link {
  public link?: string;
  public name?: string;
  public target?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cluster-front';

  public links: Link[] = [
    { name: "Gerar Boleto IPTU", target: "_self", link: "/servicos/iptu" },
    { name: "Mensagens", target: "_self", link: "/mensagem" },
    { name: "Mapas", target: "_blank", link: environment.urlMaps }
  ];
}
