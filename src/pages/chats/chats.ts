import { Component,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';


@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage implements OnInit {
  ngOnInit(): void {
    console.log('Fired onInit')
  }
  
  rootNavCtrl: NavController;
  constructor(
    public navParams: NavParams,
    public navCtrl:NavController,
    private superTab: SuperTabsController) {
      this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
  
  viewPage(){
    this.rootNavCtrl.push('FaqPage')
  }
  chatWithTeam(){
    this.superTab.slideTo(0)
  }

}
