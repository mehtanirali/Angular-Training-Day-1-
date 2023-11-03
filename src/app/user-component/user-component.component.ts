import { Component, Injectable, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnChanges{
  ipDetail!: any[];
  constructor(public UserServiceService:UserServiceService){
    
  }
  names = ["nirali","sans"];
   addName(value: string) {
      this.names.push(value);
   }
  temp="hello"
  ngOnInit():void{
    // console.log(this.temp);
    
    this.temp="hello world"
    // this.UserServiceService.setuserDetails("Nirali Mehta")
    
    this.UserServiceService.getAPIDetails().subscribe((data:any[])=>{
      this.ipDetail=data;
    })
    
    console.log(this.UserServiceService.getUserDetails())
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.temp)
  }
  message="message from parent"
  name = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }
  apiCall(){
    console.log(this.ipDetail)
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log("hi")
  }
  
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      
    });
  }

  updateProfilesetValue(){
    this.profileForm.setValue({
      firstName: 'nirali',
      lastName: 'mehta'
    });
  }

  

}
