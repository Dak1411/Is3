import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';
import { UserprofileProvider } from '../../providers/userprofile/userprofile';
import { DisableSideMenu } from '../../providers/disable-side-menu';
@IonicPage()
@DisableSideMenu()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage implements OnInit {

  spinner: any = '';
  teamList: any[] = [];
  managerVisible = false;
  category: any = 'profile';
  userDetails:any[] = [];

  constructor(public navCtrl: NavController,
    public generic: GenericServiceProvider,
    public profileApis: UserprofileProvider,
    public popOver: PopoverController) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userProfile'))
    if (this.generic.isOnline()) {
      this.spinner = this.generic.showSpinner();
      this.profileApis.fetchTeamDetail().subscribe(data => this.successCallBack(data, 'team'),
        error => this.errorCallBack(error));
    } else {
      this.generic.showToast('No network');
    }
  }
  toggleSection(i) {
    this.teamList[i].open = !this.teamList[i].open
  }
  listToggle() {
    this.managerVisible = !this.managerVisible;
  }

  chatWithBuddy(){
    this.navCtrl.push('BuddyChatPage')
  }
  viewPopOver(ev) {

    let popover = this.popOver.create('PopOverPage', {
      category: 'profile'
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

  buddyChat(recipient){
    this.navCtrl.push('BuddyChatPage',{user:recipient})
  }
  /**
   * 
   * API Call back 
   * 
   * 
   */
  successCallBack(res, caller) {
    this.spinner.dismiss();
    if (caller == 'team') {
      this.teamList = res.result;
    } else {

    }
  }
  errorCallBack(error) {
    this.spinner.dismiss();
  }
}
