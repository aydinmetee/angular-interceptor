import { Component } from '@angular/core';
import { JsonPlaceholderService } from './services/json-placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-interceptor';
  constructor(private jsonPlaceholderService:JsonPlaceholderService){

  }

  getTodos(){
    console.log("Function 1 works!");
    this.jsonPlaceholderService.getTodos().subscribe((data)=>{
      console.table(data);
    })
  }

  postTodos(){
    console.log("Function 2 works!");
    this.jsonPlaceholderService.postTodos().subscribe((data)=>{
      console.log(data);
    })
  }
}
