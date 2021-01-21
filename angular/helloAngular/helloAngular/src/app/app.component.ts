import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloAngular';

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    console.log('in Oninit')
    
  }

  getTasks(){
    this._httpService.getTasks()
  }

}
