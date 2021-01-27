import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-showcat',
  templateUrl: './showcat.component.html',
  styleUrls: ['./showcat.component.scss']
})
export class ShowcatComponent implements OnInit {
  kitten:{name:string}
  id:number
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.kitten = {name:''}
    this._route.params.subscribe((params: Params)=>{
      this.id = params.id
      this._httpService.showkitten(params).subscribe(kitty =>{
        this.kitten = kitty
      })
    })
  }

  loadedit(){
    this._router.navigate(['/kittens/'+this.id+'/edit'])
  }

}
