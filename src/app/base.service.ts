import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://localhost:7105/api/Cars/"
  
  private autokSub= new Subject()
  
  constructor(private http:HttpClient) { 
    this.loadData()
  }

  getAll(){
    return this.autokSub
  }

  private loadData(){
    this.http.get(this.url).subscribe(
      (res)=>this.autokSub.next(res)
    )
  }

  postData(body:any){
    this.http.post(this.url, body).forEach(
      ()=>this.loadData()
    )
  }
  putData(body:any){
    this.http.put(this.url+body.id, body).forEach(
      ()=>this.loadData()
    )
  }
  deleteData(body:any){
    this.http.delete(this.url+body.id).forEach(
      ()=>this.loadData()
    )
  }

}
