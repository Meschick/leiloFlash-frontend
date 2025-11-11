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
      console.log("📢 Lance recebido via SignalR:", lance);
      this.lanceSubject.next(lance);
    });
  }

  enviarLance(request: any, usuario: string): void {
    console.log('Tentando enviar lance... Estado da conexão:', this.hubConnection.state);

    if (this.hubConnection.state === signalR.HubConnectionState.Connected) {
      console.log('Enviando via SignalR', request, usuario);
      this.hubConnection.invoke('EnviarLance', request, usuario)
        .then(() => console.log('Lance enviado com sucesso via SignalR'))
        .catch(err => console.error('Erro ao enviar lance:', err));
    } else {
      console.warn('SignalR não está conectado');
    }

  }
}
