import { Component,OnInit} from '@angular/core';
import { IonicPage, NavController,Events } from 'ionic-angular';
import { UserprofileProvider } from '../../providers/userprofile/userprofile';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements OnInit {
  
  spinner:any = '';
  response:any  = '';
  userArray:any[] = [];
  constructor(public navCtrl: NavController,
              public userDetails:UserprofileProvider,
              public generic:GenericServiceProvider,
              public event:Events) {
  }

  ionViewDidLoad() {
    setTimeout(()=>{
       this.navCtrl.setRoot('DashboardPage')
    },3000)
  }

  ngOnInit(): void {
    // <!-- Un comment the below lines for apis calls
      if(this.generic.isOnline()){
        this.spinner = this.generic.showSpinner();
        // this.userDetails.fetchUserDetail().subscribe(data=>this.successCallBack(data,'userProfile'),
        //                                             error=>this.onErrorCallBack(error))
      } 
  }


  /**
   * 
   * API Call backs
   * 
   */
  successCallBack(res,caller){
    this.spinner.dismiss();
    this.response = res;
    if(caller=='userProfile'){
        if(this.response.success==true){
            this.userArray = this.response.result[0];
            localStorage.setItem('userProfile',JSON.stringify(this.userArray));
            this.event.publish('user-detail',this.userArray);
        }else{
          this.generic.showToast(this.response.msg)
        }
    }
  }
  onErrorCallBack(error){
      this.spinner.dismiss();
  }
}
