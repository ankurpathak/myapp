import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  constructor(private http: HttpClient) { }
  authenticate(credential: {username: string, password: string }, callback){
    const headers = new HttpHeaders(credential ? {
      authorization : `Basic ${btoa(credential.username + ':' + credential.password)}`
    } : {});
    this.http.get('user', {headers: headers}).subscribe((response: {name: string}) => {
      if (response.name) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      if (callback) {
        callback();
      }
    });
  }
}
