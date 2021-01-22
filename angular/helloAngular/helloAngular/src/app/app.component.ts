import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloAngular';
  show:boolean;
  kittens: Array<{name:string}>
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    console.log('in Oninit')
    this.kittens = []
    this.show = true;
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

}
