import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { SuperTabsController } from 'ionic2-super-tabs';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})
export class TaskPage implements OnInit {
  ngOnInit(): void {
    this.mySelectedIndex = this.navParams.data.tabIndex || 0;
  }

  allTaskRoot = 'AllTaskPage'
  todayTaskRoot = 'TodayTaskPage'
  overdueTaskRoot = 'OverdueTaskPage'
  mySelectedIndex:any = 0

  constructor(
      public navCtrl: NavController,
      public navParams:NavParams,
      public  superTabsCtrl: SuperTabsController,) {}

}
