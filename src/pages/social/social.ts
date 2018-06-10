import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController,NavParams, ViewController } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { SuperTabsController } from 'ionic2-super-tabs';



@IonicPage()
@DisableSideMenu()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class SocialPage implements OnInit{
  

  contactsRoot = 'ContactsPage'
  chatsRoot = 'ChatsPage'
  callsRoot = 'CallsPage'
  mySelectedIndex:any=0

  constructor(
    public navCtrl: NavController,
    public navParams:NavParams,
    public  superTabsCtrl: SuperTabsController,
    public viewCtrl:ViewController) {
      this.mySelectedIndex = this.navParams.data.tabIndex || 0;
    }
    showToolbar() {
      this.superTabsCtrl.showToolbar(true);
    }
    onTabSelect(ev: any) {
      console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    }
    
    ngOnInit(): void {
    }
}
