import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeliveryHome';
  lat: number = 49.8477485;
  lng: number = 24.0155463;
}
