import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // add message
  add(message: string){
    this.messages.push(message);
  }

  // clear message
  clear(){
    this.messages = [];
  }
}
