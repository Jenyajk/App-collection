import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
export const baseUrl = 'https://manager-yma2.onrender.com'
export interface IUser {
  username: string,
  password: string,
  email?: string

}
@Injectable({
  providedIn: 'root'
})


export class ApiService {

  errorMessage: String = ''
  constructor(private httpClient: HttpClient) { }

  public registrationUser(name: string, password: string, email: string) {
  return  this.httpClient.post(`${baseUrl}/auth/registration`, {
      "username": name,
      "password": password,
      "email": email
    })

  }

  public postUser(name: string, password: string)  {
   return  this.httpClient.post(`${baseUrl}/auth/login`, {
     "username": name,
     "password": password
   })
  }


}
