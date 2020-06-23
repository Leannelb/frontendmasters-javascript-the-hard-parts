import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
// Injectable is what allows you to inject a service for use elsewhere
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  // The service exposes its cache of messages and two methods: one to add() a message to the cache and another to clear() the cache.
}