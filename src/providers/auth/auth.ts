import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ApiUrlsProvider } from '../api-urls/api-urls';
import { Events } from 'ionic-angular'

@Injectable()
export class AuthProvider {

  
  constructor(public http: Http,
            public apis:ApiUrlsProvider,
            public event:Events) {
    console.log('Hello AuthProvider Provider');
  }

  
  doLogin(req){
      let header = new Headers();
      header = this.apis.createPostAuthorizationHeader(header);
      let requestOption = new RequestOptions({ headers: header });
      return this.http.post(this.apis.LOGIN_URL,JSON.stringify(req),requestOption).map(res => {
        if(res.status){
          localStorage.setItem('token',res.headers.get('x-access-token'));
          this.event.publish('tokenReceived',res.headers.get('x-access-token'))

        }
        return res.json();
      });
  }

}
