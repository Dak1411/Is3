import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ApiUrlsProvider } from '../api-urls/api-urls';
import { Events } from 'ionic-angular'

@Injectable()
export class UserprofileProvider {

  constructor(public http: Http,
              public apis:ApiUrlsProvider) {}

  fetchUserDetail(){
    let council = localStorage.getItem('council');
    let Url = 'http://'+council+'.test.is3talk.com/api/mobile/user/profile'
    let header = new Headers();
    header = this.apis.createGetAuthorizationHeader(header);
    let requestOption = new RequestOptions({ headers: header });
    return this.http.get(Url,requestOption).map(res=>{
      return res.json();
    })
  }

  fetchTeamDetail(){
    let council = localStorage.getItem('council');
    let Url = 'http://'+council+'.test.is3talk.com/api/mobile/team/list';
    let header = new Headers();
    header = this.apis.createGetAuthorizationHeader(header);
    let requestOption = new RequestOptions({ headers: header });
    return this.http.get(Url,requestOption).map(res=>{
      return res.json();
    })
    //return this.http.get("assets/information.json").map(res=>res.json());
  }
}
