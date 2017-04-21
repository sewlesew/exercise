import { Component } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myform:FormGroup;

  constructor(private formBuilder: FormBuilder,private httpservice:HttpServiceService) {
    
        this.myform=formBuilder.group({
          'name':['',Validators.required],
          'email':['abc@k.com',Validators.required],
           'post': ['', Validators.minLength(10)]
        });

  }

  submit(){
    console.log(this.myform.value);
  }
  getData(){
    
  }

}
