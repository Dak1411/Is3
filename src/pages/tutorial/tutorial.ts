import { Component,trigger, transition, style, state, animate, keyframes, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, Slides } from 'ionic-angular';
import { DisableSideMenu } from '../../providers/disable-side-menu';

@IonicPage()
@DisableSideMenu()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  animations: [
    
    trigger('bounce', [
          state('*', style({
              transform: 'translateX(0)'
          })),
          transition('* => rightSwipe', animate('700ms ease-out', keyframes([
            style({transform: 'translateX(0)', offset: 0}),
            style({transform: 'translateX(-65px)',  offset: 0.3}),
            style({transform: 'translateX(0)',     offset: 1.0})
          ]))),
          transition('* => leftSwipe', animate('700ms ease-out', keyframes([
            style({transform: 'translateX(0)', offset: 0}),
            style({transform: 'translateX(65px)',  offset: 0.3}),
            style({transform: 'translateX(0)',     offset: 1.0})
          ])))
      ])
    ]
})
export class TutorialPage {
  @ViewChild(Slides) slides: Slides;
  state: string = 'x';
  skipButton:boolean=true;
  showPager:boolean = true;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public menuCtrl:MenuController) {
  }

  ionViewDidEnter(){
    this.menuCtrl.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menuCtrl.swipeEnable(true);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) 
      this.state = 'rightSwipe';
    else 
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }
  slideChanged() {
    if (this.slides.isEnd()){
      this.skipButton=false;
      this.showPager = false;
    }
    else{
      this.skipButton=true;
      this.showPager = true;
    }
  }
  navigatePinRetrieval(){
    this.navCtrl.setRoot('WelcomePage');
  }

}
