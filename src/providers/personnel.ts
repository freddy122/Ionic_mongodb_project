import { Injectable } from '@angular/core';
import { Http,Headers  } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Personnel provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Personnel {
  data:any;
  constructor(public http: Http) {
	this.data = null;
	console.log('Hello Personnel Provider');
  }
  
    getPersonnels(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/personnes')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createPersonnel(personnel){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://localhost:8080/api/personnes', JSON.stringify(personnel), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
  deletePersonnel(id){
 
    this.http.delete('http://localhost:8080/api/personnes/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
  
  

}
