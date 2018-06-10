import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular'  

import { Socket } from 'ng-socket-io';

@Injectable()
export class ChatserviceProvider {

  constructor(public socket:Socket,
              public event:Events) {
    
  }

  getFriendMessage(){

  }

  sendMessage(msg){
      this.socket.emit('newMessage',msg)
  }

}
