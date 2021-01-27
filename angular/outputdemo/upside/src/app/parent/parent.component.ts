import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  thingToUpdate:string

  childIsHappy:boolean

  constructor() { }

  ngOnInit() {
    this.thingToUpdate = 'Not Updated'
    this.childIsHappy = true
  }

  childIsScreaming(why){
    console.log('child is screaming,',why)
    this.childIsHappy = false;
  }

  comfortChild(){
    console.log('Twinkle Twinkle Little Star....')
  }
}
