import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs'
import { interval } from 'rxjs/observable/interval'
import { switchMap } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  closeActive: boolean = false;
  dayString: string = "";
  weekString: string = "";
  dateString: string = "";
  close$: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    enum Days {"星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"}

    let date = new Date();
    this.dayString = date.getDate() < 10 ? "0" + date.getDate(): date.getDate() + "";
    this.weekString = Days[date.getDay()];
    this.dateString = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1): date.getMonth()) + "/" + date.getFullYear();

    let closeBtn = document.querySelector('.close');
    this.close$ = Observable.fromEvent<MouseEvent>(closeBtn, 'click').pipe(
                    switchMap(() => interval(100))
                  ).subscribe(()=> {
                    this.dismiss();
                  })


  }

  dismiss() {
    this.close$.unsubscribe();
    this.closeActive = true;

    //let data = { 'foo': 'bar' };

    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 800);

  }
}
