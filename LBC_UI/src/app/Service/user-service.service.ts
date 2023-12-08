import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from "../model/user.model";
import * as moment from "moment";
import {LoginResponse} from "../model/login-response.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/user";


  constructor(private http: HttpClient) {

  }

  saveUser(email:string,password:string,firstName:string,lastName:string,role:string):Observable<User> {

    console.log("Register "+lastName)
    const data = {

      email,
        password,
        firstName,
        lastName,
        role :"ADMIN"



    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });
    console.log("data=",data)
    return this.http.post<User>(this.baseUrl, data, { headers });
  }
  updateUser(id:number,password:string,firstName:string,lastName:string,role:string):Observable<User> {

    console.log("Register "+lastName)
    const data = {

      
      password,
      firstName,
      lastName,
      role :"ADMIN"



    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });
    console.log("data=",data)
    return this.http.put<User>(this.baseUrl+"/"+id, data, { headers });
  }

  getAll(): Observable<User[]> {
    console.log(this.baseUrl)
    return  this.http.get<User[]>(this.baseUrl+"/list");
  }
  getByID(id:number): Observable<User> {
    console.log(this.baseUrl)
    return  this.http.get<User>(this.baseUrl+"/"+id);
  }
  deleteByID(id:number): Observable<void> {
    console.log("delete "+this.baseUrl+"/"+id);
    return  this.http.delete<void>(this.baseUrl+"/"+id);
  }
}
