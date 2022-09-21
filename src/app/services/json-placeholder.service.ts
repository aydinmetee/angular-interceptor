import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  get apiUrl(){
    return 'https://jsonplaceholder.typicode.com';
  }

  constructor(private httpClient:HttpClient) { }

  getTodos(){
    return this.httpClient.get(this.apiUrl + '/todos/1');
  }

  postTodos(){
    return this.httpClient.post(this.apiUrl + '/todos/1',{})
  }
}
