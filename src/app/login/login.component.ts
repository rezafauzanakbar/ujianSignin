import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resultLogin: any = ""
  user: Login = { username: "", password: "" };
  alertMessage: string = "Happy Login!"
  title:string = "Selamat Login Friends!"


  constructor(private authService: AuthService) { }


  ngOnInit(): void { }


  login(): void {
    this.authService.login(this.user).pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.resultLogin = respon;
        console.log(this.resultLogin)
        alert(this.alertMessage)
      })
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
