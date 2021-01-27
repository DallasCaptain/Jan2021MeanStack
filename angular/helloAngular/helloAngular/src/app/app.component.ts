import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newcat:{name:string}

  title = 'helloAngular';
  show:boolean;
  kittens: Array<{name:string}>
  constructor(private _httpService: HttpService, private _router: Router){}

  ngOnInit(){
    console.log('in Oninit')
    this.kittens = []
    this.show = true;
    this.newcat = {name:''}
  }

  toggleshow(){
    this.show = !this.show
  }
  getKittens(){
    this._httpService.getKittens().subscribe(kittens=>{
      //@ts-ignore
      this.kittens = kittens
    })
  }

  submitForm(){
    console.log('i submited the form',this.newcat)
    this._httpService.createKitten(this.newcat).subscribe(data =>{
      console.log('data from server after submit new cat: ', data)
      this.getKittens()
    })
  }

  updatecat(index){
    this._httpService.updatecat(index,this.kittens[index]).subscribe(data=>{
      console.log(data)
    })
    //console.log('kitten at index:',index,this.kittens[index])
  }

}
