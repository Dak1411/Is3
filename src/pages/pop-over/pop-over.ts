import { Component , OnInit} from '@angular/core';
import { ViewController,NavParams,IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage implements OnInit {

  category:any = '';
    ngOnInit(): void {
        this.category = this.navParams.get('category')
    }
    constructor(private viewCtrl: ViewController,
                public navParams:NavParams) {
       
    }

    setSelectedTitle(selectedItem) {
        this.viewCtrl.dismiss(selectedItem);
    }

}
