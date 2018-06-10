import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
// <!-- Un comment the below lines for apis calls -->
import { Socket } from 'ng-socket-io';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit {
  
  ngOnInit(): void {
    // <!-- Un comment the below lines for apis calls -->
    // this.event.publish('user-detail',JSON.parse(localStorage.getItem('userProfile')));
  }

  constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public app: MyApp,
        public event:Events,
         public socket:Socket
      ){
          this.socket.connect();
  }
  ionViewWillEnter(){
    this.app.activePage='';
  }
  sayHello(){
    this.navCtrl.push('SocialPage',{tabIndex:1})
  }

  featureNavigation(page,tabId){
      if(tabId!=''){ 
        this.navCtrl.push(page,{tabIndex:tabId})
      }else{
        this.navCtrl.push(page)
      }
  }
  viewNotifications(){
    this.navCtrl.push('NotificationsPage')
  }

}
