import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = "https://fakestoreapi.com/auth/login";
  constructor(private http: HttpClient) { }

  public login(user: Login): Observable<any> {
    const headers = {
      "Content-Type": "application/json"
    };
    const body = JSON.stringify(user);
    console.log(body)
    const respon = this.http.post<any>(this.baseURL, body, { headers });

    return respon;
  }
}
