import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-autok',
  templateUrl: './autok.component.html',
  styleUrls: ['./autok.component.css']
})
export class AutokComponent {
  autok:any
  oszlopok=["lpn","model","color"]
  ujAuto:any={}
  keresendo:any
  constructor(private base:BaseService){
    this.base.getAll().subscribe(
      (res)=>this.autok=res
    )
  }

  postCar(){
    this.base.postData(this.ujAuto)
  }

  putCar(body:any){
    this.base.putData(body)
  }
  deleteCar(body:any){
    this.base.deleteData(body)
  }

}
