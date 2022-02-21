import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restapimodel} from'../share/restapimodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http :HttpClient) { }

  title:string='RestApiService';


  getproduct(){
    return this.http.get('http://localhost:7557/api/Products/')
    .pipe(map((res:any)=>{
      return res
    }))
  }
}


//http://localhost:7557/api/products