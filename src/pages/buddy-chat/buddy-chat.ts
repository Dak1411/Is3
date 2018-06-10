import { Component,ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController,NavParams,PopoverController } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { ChatserviceProvider } from '../../providers/chatservice/chatservice';
import { Socket } from 'ng-socket-io';
import { Events } from 'ionic-angular/util/events';
import { Observable } from 'rxjs/Observable';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-buddy-chat',
  templateUrl: 'buddy-chat.html',
})
export class BuddyChatPage implements OnInit{
 

  myStuff = '';
  recipient:any = '';
  message:any[] = [];
  sender:any= '';
  council:any = '';
  newMessage:any = ''

  constructor(public navCtrl: NavController,
              public navParams:NavParams,
              public chat:ChatserviceProvider,
              public socket:Socket,
              public event:Events,
              public popOver:PopoverController) {
                  this.getMessages().subscribe(message => {
                    this.message.push(message);
                  });

                this.socket.on('sentMessage',data=>{
                  console.log(data)
                })

                this.socket.on('message',data=>{
                  this.message.push(data)
                })

                // this.event.subscribe('sentMessage',data=>{
                //   console.log(data)
                // })
  }

  ngOnInit(): void {
   try {
    this.recipient = this.navParams.get('user');
    this.sender = JSON.parse(localStorage.getItem('userProfile'));
    this.council = localStorage.getItem('council');
   } catch (error) {
     
   }
    console.log(this.recipient)
    this.chat.getFriendMessage();
  }
  viewPopOver(ev){
    let popover = this.popOver.create('PopOverPage', {
      category: ''
    });
    popover.present({
      ev: ev
    });
    popover.onDidDismiss((popoverData) => {
      if (popoverData === null) {

      } else {
        console.log(popoverData)
      }

    })
  }

  sendMessage(){
    if(this.newMessage){
      let messageRequest={
        'sender':this.sender.id,
        'recipient':this.recipient._id,
        'message_id':this.council+'_'+this.sender.id+'_'+Date.now(),
        'message':this.newMessage,
        'loca_time':new Date(),
      }
      this.socket.emit('newMessage',messageRequest);
      this.message.push(messageRequest);
      this.newMessage = '';
    }
   
    //this.chat.sendMessage(messageRequest);
  }
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('newMessage', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }
  
}
