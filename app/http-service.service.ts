import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'

@Injectable()
export class HttpServiceService {
  data :string[]=[];
  title:string="";
  resp;
  constructor( private http:Http) { }
   
  getPosts(){

     const result= this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
     result.subscribe((res:Response)=>{
           this. resp=res.json();       
     
          console.log(this.data);   
      
            for(let item of this.resp){              
               if(item['id']==1)  {
                 this.data.push(item['body']);
                
                if(!this.title){
                   this.title=item['title'];
                   console.log(this.title);
                }
                 
                
               }                    
            }


     });
     return this.data;
  }

  getTitle(){
    return this.title;
  }


}
