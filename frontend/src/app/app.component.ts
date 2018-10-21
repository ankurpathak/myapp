import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  // greeting = {'id': 'XXX', 'content': 'Hello World'};
  greeting = {};
  constructor(private http: HttpClient) {
    this.http.get('resource').subscribe(data => {
      return this.greeting = data;
    });
  }
}
