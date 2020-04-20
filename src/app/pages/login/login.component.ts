import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "src/app/services/websocket.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  nombre: string = "";

  constructor(public wsSocket: WebsocketService, private router: Router) {}

  ngOnInit(): void {}

  ingresar() {
    this.wsSocket.loginWS(this.nombre).then(() => {
      this.router.navigate(["/mensajes"]);
    });

    this.nombre = "";
  }
}
