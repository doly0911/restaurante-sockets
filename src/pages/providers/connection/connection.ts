import { Injectable } from "@angular/core";

import * as io from "socket.io-client";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Connection<T> {
  data$: Observable<T>;
  emit: (path: string, data: T) => any;
}

@Injectable()
export class ConnectionProvider {
  private url = "";

  constructor() {
    this.url = `${location.hostname}:5000`;
  }

  getConnection<T extends {}>(path: string): Connection<T> {
    let socket: SocketIOClient.Socket;

    let data$ = new Observable<string>(observer => {
      socket = io(this.url);

      socket.on(path, data => {
        observer.next(data);
      });

      return () => {
        socket.disconnect();
      };
    }).pipe(map<string, T>(order => JSON.parse(order)));

    return {
      data$,
      emit: (path: string, data: T) => socket.emit(path, JSON.stringify(data))
    };
  }
}
