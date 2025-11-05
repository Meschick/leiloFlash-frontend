import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection!: signalR.HubConnection;
  private lanceSubject = new Subject<any>();
  public lances$ = this.lanceSubject.asObservable();



  startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5152/lancesHub')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Conectado ao SignalR'))
      .catch(err => console.error('Erro SignalR:', err));

    this.hubConnection.on('ReceberLance', (lance) => {
      console.log('Novo lance recebido:', lance);
      this.lanceSubject.next(lance);
    });
  }

  enviarLance(request: any, usuario: string): void {
    if (this.hubConnection.state === signalR.HubConnectionState.Connected) {
      this.hubConnection.invoke('EnviarLance', request, usuario)
        .catch(err => console.error('Erro ao enviar lance:', err));
    } else {
      console.warn('SignalR não está conectado');
    }
  }
}
