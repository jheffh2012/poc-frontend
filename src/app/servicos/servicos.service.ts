import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mensagem } from '../mensagem/mensagem.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(
    protected http: HttpClient,
    protected router: Router
  ) { }

  public buscarIptu(dados: any): Observable<any> {
    return this.http.post<any>(environment.urlIntegracao + '/iptu', httpOptions).pipe(
      retry(2),
      catchError(this.processError)
    )
  }

  public GerarNumeroBoleto(dados: any): Promise<any> {
    return fetch(environment.urlIntegracao + "/iptu", {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados),
          mode: 'no-cors'
    }).then(response => {
      return response.text();
    }).then(jsonResponse => {
      this.router.navigate(["mensagem"])
    }).catch (error => {
      console.log(error)
    });
  }

  private processError(err: any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
