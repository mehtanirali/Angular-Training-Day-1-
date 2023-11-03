import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnChanges{
  @Input() message="";
  @Output() childEvent = new EventEmitter();
   buttonClick(value: string) {
      this.childEvent.emit(value);
   }
  constructor(public UserServiceService:UserServiceService ){
    
  }
  
  displayDetails(){
    console.log(this.UserServiceService.getUserDetails())
  }
  temp="hello"
  ngOnInit():void{
    // console.log(this.temp);
    
    this.temp="hello world"
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.UserServiceService.getUserDetails())
  }


}
