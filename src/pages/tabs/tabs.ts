import { Component } from '@angular/core';
import { ModalController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //public tabid: number;
  //public selectTabIndex: number;
  tab1Root = 'HomePage';
  tab2Root = 'ResourcePage';
  tab3Root = 'ContactPage';
  tab4Root = 'MessagePage';
  tab5Root = 'MePage';

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
    /*this.tabid = navParams.get("id");
    if(this.tabid !== undefined || this.tabid !== null){
      this.selectTabIndex = this.tabid;
    }*/
  }

  presentPostModal() {
    let modal = this.modalCtrl.create('PostPage', null, {
      showBackdrop: false,
      enableBackdropDismiss: false,
      cssClass: 'update-profile-modal',
      enterAnimation: 'modal-fade-in-enter',
      leaveAnimation: 'modal-fade-out-leave'
    });
    modal.present(); //页面展示
  }
}
