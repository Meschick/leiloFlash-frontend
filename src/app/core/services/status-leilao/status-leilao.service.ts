import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StatusLeilaoService {
  private estadoLeilao = new BehaviorSubject<boolean>(true);
  estadoLeilao$ = this.estadoLeilao.asObservable();

  finalizar() {
    this.estadoLeilao.next(false);
  }
}
