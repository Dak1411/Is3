import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { GenericServiceProvider } from '../../providers/generic-service/generic-service';
import { UserprofileProvider } from '../../providers/userprofile/userprofile';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage implements OnInit{
  
  spinner:any = '';
  teamList:any[]  = [];
  managerVisible: boolean = false;
  constructor(public navCtrl: NavController,
              public viewCtrl:ViewController,
              public generic:GenericServiceProvider,
              public userApis:UserprofileProvider) {
  }

  ngOnInit(): void {
    if(this.generic.isOnline()){
      this.spinner = this.generic.showSpinner();
      this.userApis.fetchTeamDetail().subscribe(data=>this.successCallback(data),
                                                error=>this.errorCallBack(error))
    }else{
      this.generic.showToast('No network')
    }
  }
  toggleSection(i){
    this.teamList[i].open=!this.teamList[i].open
  }
  listToggle() {
    this.managerVisible = !this.managerVisible;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
  
  

  /**
   * 
   * API Call backs 
   * 
   */
  successCallback(response){
      this.spinner.dismiss();
      if(response.success==true){
          this.teamList = response.result;
      }else{
        this.generic.showToast(response.msg)
      }
  }
  errorCallBack(error){
    this.spinner.dismiss();
      try {
        this.generic.showToast(error)
      } catch (error) {
        
      }
  }

}
