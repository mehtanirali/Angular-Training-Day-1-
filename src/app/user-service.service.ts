import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  detail!: string;
  apiUrl='https://datausa.io/api/data?drilldowns=Nation&measures=Population'
  setuserDetails(name: string){
    this.detail = name;

  }
  getUserDetails(){
    var temp1="hello"
    return this.detail;
  }
  
  constructor(private http: HttpClient) { }
  getAPIDetails():Observable<any>{
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
