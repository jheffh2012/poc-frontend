import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mensagem } from './mensagem.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(
    protected http: HttpClient
  ) { }

  getMensagem(id: number): Observable<Mensagem> {
    return this.http.get<Mensagem>(environment.urlApi + '/mensagem/' + id, httpOptions).pipe(
      retry(2),
      catchError(this.processError)
    )
  }

  getMensagens(): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(environment.urlApi + '/mensagem', httpOptions).pipe(
      retry(2),
      catchError(this.processError)
    )
  }

  getMensagensPorFila(fila: string): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(environment.urlApi + '/mensagem/fila/' + fila, httpOptions).pipe(
      retry(2),
      catchError(this.processError)
    )
  }

  processError(err: any) {
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
