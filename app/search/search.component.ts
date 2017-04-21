import { Component, OnInit,Pipe } from '@angular/core';
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

result:string[];
title:string;
myform:FormGroup;
  constructor(private formbuilder: FormBuilder, private httpservice:HttpServiceService) {

         this.myform=this.formbuilder.group({
          'search':['',Validators.required]
         });
        this.result=this.httpservice.getPosts();
       
        // this.title=new Promise((resove,reject)=>{
        //   this.httpservice.getTitle();
        // });
         this.title=this.httpservice.getTitle();
         console.log(this.title);

  }

  ngOnInit() {
  }
  submit(){
   
  console.log("on submit");
  }

}
