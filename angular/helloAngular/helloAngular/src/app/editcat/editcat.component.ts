import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.scss']
})
export class EditcatComponent implements OnInit {

  kitten:{name:string}
  constructor(private _httpService: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.kitten = {name:''}
    this._route.parent.params.subscribe((params: Params)=>{
      console.log('edit cat params', params)
      this._httpService.showkitten(params).subscribe(kitty =>{
        this.kitten = kitty
      })

    })
  }

  submitForm(){
    this.kitten.name = 'bob'
  }

}
