import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
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
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:9080/SpringBootHW/employees');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:9080/SpringBootHW/employees" + "/"+ employee.empId);
  }

  public createEmployee(employee) {
    console.log(employee);
    return this.httpClient.post<Employee>("http://localhost:9080/SpringBootHW/addemployee", employee);
  }
}
