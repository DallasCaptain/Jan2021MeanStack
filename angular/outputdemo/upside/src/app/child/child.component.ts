import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() startScreaming = new EventEmitter()
  amIScreaming:boolean

  constructor() { }

  ngOnInit() {
    this.amIScreaming = false
  }


  scream(){
    this.amIScreaming = true
    this.startScreaming.emit('I want IceCream')
  }
}
