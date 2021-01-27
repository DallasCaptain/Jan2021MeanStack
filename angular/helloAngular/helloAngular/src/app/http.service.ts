import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  
  constructor(private _http: HttpClient) { }
  
  getTasks(){
    let tempObservable = this._http.get('/tasks')
    tempObservable.subscribe(data => {
      console.log('data from service', data)
    })
  }
  
  getKittens() {
    return this._http.get('/api/kittens')
  }
  
  createKitten(newkitten) {
    return this._http.post('/api/kittens', newkitten)
  }

  updatecat(index: any, arg1: { name: string; }) {
    return this._http.put('/api/kittens/'+index, arg1)
  }

  showkitten(params: Params) {
    return this._http.get<{name:string}>('/api/kittens/'+params.id)
  }

}
