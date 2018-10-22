import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Demo2';
  greeting: { id: string, content: string };

  constructor(private app: AppService, private http: HttpClient) {
    // this.http.get('resource').subscribe((data: {
    /* this.http.get('resource').subscribe((data: {
       id: string,
       content: string
     }) => this.greeting = data); */
    this.http
      .get('token')
      .subscribe((data: { token: string }) => {
        const token = data.token;
        this.http
          .get('resource', {
            headers: {'X-Auth-Token': token}
          })
          .subscribe((data1: {
            id: string,
            content: string
          }) => this.greeting = data1);
      });
  }

  authenticated() {
    return this.app.authenticated;
  }

  ngOnInit() {
  }

}
