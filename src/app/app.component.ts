import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .online {
  color: white;
  }
  `],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea3';
  serverCreated = true;
  servers = [1];

  mostrarDetalles() {
    this.serverCreated = (this.serverCreated) ? false : true;
    this.servers.push(this.servers.length + 1);
  }

  getColor() {
    if (this.servers.length > 5)
      return 'blue'
      else
      return 'white'
  }

}
