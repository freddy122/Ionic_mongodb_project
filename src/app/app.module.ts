import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonnelPage } from '../pages/personnel-page/personnel-page';
import { Personnel } from '../providers/personnel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	PersonnelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	PersonnelPage
  ],
  providers: [Personnel]
})
export class AppModule {}
