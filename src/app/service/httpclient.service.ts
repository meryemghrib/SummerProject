import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public ID :string ,
    public loginID  :string,
    public  Displayname  :string,
    public FirstName :string,
    public lastName :string,
    public Email  :string,
    public Function  :string,
    public Organization_Unit  :string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<Employee[]>('//localhost:8080/employees',{headers});
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees"+ "/"+ employee.ID );
  }
  public createEmployee(employee) {
    return this.httpClient.post<Employee>("//localhost:8080/employees", employee);
  }



getHeaders(){
  let username='admin'
  let password='password'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}