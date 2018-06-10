
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class ApiUrlsProvider{

  council:any=  '';
  apis:any='';
  USER_DETAILS_URL='';
  LOGIN_URL: any = 'http://mobile.test.is3talk.com/api/mobile/auth/login'
  LOGIN_URL_LOCAL: any = 'http://mobile.is3alpha.com:3000/api/mobile/auth/login'
  BASE_URL_LIVE: any = 'http://'+localStorage.getItem('council')+'.test.is3talk.com/api/mobile';
  BASE_URL: any = 'http://'+localStorage.getItem('council')+'.is3alpha.com:3000/api/mobile';
  USER_DETAILS_API: any=  this.BASE_URL_LIVE + '/user/profile'
  TEAMS_URL: any = this.BASE_URL_LIVE + '/team/list'

  constructor() {

  }

  createPostAuthorizationHeader(header: Headers) {
    header.append('Accept', 'application/json');
    header.append('Content-Type', 'application/json');
    if (localStorage.getItem('token')) {
      header.append('x-access-token', localStorage.getItem('token'))
    }
    return header;
  }
  createGetAuthorizationHeader(header: Headers) {
    if (localStorage.getItem('token')) {
      header.append('x-access-token', localStorage.getItem('token'))
    }
    return header;
  }

  developmentUrls(council){
    this.apis.LOGIN_URL = '';
    this.apis.BASE_URL ='';
    this.apis.USER_DETAILS_URL = '';
    this.apis.TEAMS_URL = ''
    return this.apis;
  }
  liveUrls(council){
    this.apis.LOGIN_URL = '';
    this.apis.BASE_URL ='';
    this.apis.USER_DETAILS_URL = '';
    this.apis.TEAMS_URL = ''
    return this.apis;
  }


}
