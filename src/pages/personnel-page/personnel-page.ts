import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the PersonnelPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personnel-page',
  templateUrl: 'personnel-page.html'
})
export class PersonnelPage {
   nom: any;
   prenom: any;
   adresse: any;
   dateNaiss: any;
  constructor(public viewCtrl: ViewController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonnelPagePage');
  }
  
   save(): void {
 
    let personnel = {
      nom: this.nom,
	  prenom: this.prenom,
	  adresse: this.adresse,
      dateNaiss: this.dateNaiss
    };
 
    this.viewCtrl.dismiss(personnel);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
