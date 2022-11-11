import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) { }

  getWelcome():Observable<any> {
    return this.httpClient.get('http://localhost:3000/welcome/');
  }

  AddUser(body: any):Observable<any> {
    return this.httpClient.post('http://localhost:3000/AddUser/', body);
  }

  Login(body: any):Observable<any> {
    return this.httpClient.post('http://localhost:3000/Login/', body);
  }

  CreateCart(body: any):Observable<any> {
    return this.httpClient.post('http://localhost:3000/CreateCart/', body);
  }

  DropCart(body: any):Observable<any> {
    return this.httpClient.post('http://localhost:3000/DropCart/', body);
  }

  GetAdmins():Observable<any> {
    return this.httpClient.get('http://localhost:3000/GetAdmins');
  }

  GrantAccess(body: any):Observable<any> {
    return this.httpClient.post('http://localhost:3000/GrantAccess', body);
  }

  TopSellersGeneral():Observable<any> {
    return this.httpClient.get('http://localhost:3000/TopSellersGeneral');
  }

  TopSellersChicken():Observable<any> {
    return this.httpClient.get('http://localhost:3000/TopSellersChicken');
  }

  TopSellersPork():Observable<any> {
    return this.httpClient.get('http://localhost:3000/TopSellersPork');
  }

  TopSellersBeef():Observable<any> {
    return this.httpClient.get('http://localhost:3000/TopSellersBeef');
  }

  GetAllBeef():Observable<any> {
    return this.httpClient.get('http://localhost:3000/GetAllBeef');
  }

  GetAllPork():Observable<any> {
    return this.httpClient.get('http://localhost:3000/GetAllPork');
  }

  GetAllChicken():Observable<any> {
    return this.httpClient.get('http://localhost:3000/GetAllChicken');
  }

  public passFirstName = new BehaviorSubject<any>(""); 
  readonly passFirstNames$ = this.passFirstName.asObservable();

  public passAuthenticationToNav = new BehaviorSubject<any>("");
  readonly passAuthenticationToNav$ = this.passAuthenticationToNav.asObservable();
}
