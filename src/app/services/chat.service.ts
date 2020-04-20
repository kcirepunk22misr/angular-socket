import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor(public webSocket: WebsocketService) {}

  sendMessage(mensaje: string) {
    const payload = {
      de: this.webSocket.getUsuario().nombre,
      cuerpo: mensaje,
    };

    this.webSocket.emit("mensaje", payload);
  }

  getMessage() {
    return this.webSocket.listen("mensaje-nuevo");
  }

  getMessagePrivate() {
    return this.webSocket.listen("mensaje-privado");
  }

  getUsuariosActivos() {
    return this.webSocket.listen("usuarios-activos");
  }

  emitirUsuariosActivos() {
    this.webSocket.emit("obtener-usuarios");
  }
}
