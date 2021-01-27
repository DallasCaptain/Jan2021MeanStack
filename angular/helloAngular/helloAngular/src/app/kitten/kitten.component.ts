import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss']
})
export class KittenComponent implements OnInit {

  @Input()kitten:{name:string};

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  }

  
  feed(){
    this.kitten.name += ' the well fed'
  }

}
