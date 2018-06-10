import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';
import { UserprofileProvider } from '../../providers/userprofile/userprofile';

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage implements OnInit {
  teamList: any[] = [];
  managerVisible: boolean = false;
  spinner: any = '';
  userDetails: any[] = [];
  response: any= '';

  constructor(public navCtrl: NavController,
    public generic: GenericServiceProvider,
    public profileApis: UserprofileProvider) {
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userProfile'))
    if (this.generic.isOnline()) {
      this.spinner = this.generic.showSpinner();
      this.profileApis.fetchTeamDetail().subscribe(data=>this.successCallBack(data),
                                                  error=>this.errorCallBack(error))

    }
  }
  listToggle() {
    this.managerVisible = !this.managerVisible;
  }

  toggleSection(i){
    this.teamList[i].open=!this.teamList[i].open
  }

  chatPage(user) {
    this.navCtrl.push('BuddyChatPage',{user:user})
  }

  /**
   * 
   * API Call backs
   * 
   */
  successCallBack(res){
    this.spinner.dismiss();
    this.response = res;
    if(this.response.success==true){
        this.teamList = this.response.result
    }else{
      this.generic.showToast(this.response.msg)
    }

  }
  errorCallBack(error){
      this.generic.showToast(error)
  }

}
