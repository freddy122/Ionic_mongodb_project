import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PersonnelPage } from '../personnel-page/personnel-page';
import { Personnel } from '../../providers/personnel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 personnels: any;
 
  constructor(public nav: NavController, public personnelService: Personnel, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
    this.personnelService.getPersonnels().then((data) => {
      console.log(data);
      this.personnels = data;
    });
 
  }
 
  addPersonnel(){
 
    let modal = this.modalCtrl.create(PersonnelPage);
 
    modal.onDidDismiss(review => {
      if(review){
        this.personnels.push(review);
        this.personnelService.createPersonnel(review);        
      }
    });
 
    modal.present();
 
  }
 
  deletePersonnel(review){
 
    //Remove locally
      let index = this.personnels.indexOf(review);
 
      if(index > -1){
        this.personnels.splice(index, 1);
      }   
 
    //Remove from database
    this.personnelService.deletePersonnel(review._id);
  }

}
