import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-calls',
  templateUrl: 'calls.html',
})
export class CallsPage implements OnInit{

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public superTab:SuperTabsController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallsPage');
  }
  ngOnInit(): void {
    this.viewCtrl.showBackButton(true);
  }
  
  newCall(){
    this.superTab.slideTo(0);
  }
}
