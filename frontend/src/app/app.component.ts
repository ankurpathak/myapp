import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import {AppService} from './app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private app: AppService, private router: Router) {
  }

  logout() {
    this.http.post('logout', {}).pipe(
      finalize(() => {
          this.app.authenticated = false;
          this.router.navigateByUrl('/login');
      })
    ).subscribe();
  }

}
