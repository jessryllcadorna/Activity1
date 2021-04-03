import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MessagePageModule } from '../pages/message/message.module';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  cName = "";
  cNumber = "";
  contacts = [];

  constructor(private alertCtrl:AlertController) {}

  saveContact(){
    let contact =  {
      name: this.cName,
      number: this.cNumber
    }
    this.contacts.push(contact);
    this.clearField();
  }

    clearField(){
      this.cName = "";
      this.cNumber = "";
    }

    async confirmDelete(cont){
      const alert = await this.alertCtrl.create({
        header: 'Confirm Delete Contacts',
        message: 'Delete contact?',
        buttons:[
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'ion-color',
          handler: () => 
          {
            console.log('Cancel Clicked');
          }
        },
        {
          text: 'Yes',
          cssClass: 'ion-color',
          handler: () => 
          {
            let index = this.contacts.indexOf(cont);
    
            if(index > -1)
            {
              this.contacts.splice(index, 1);
            }
          }
        }]
      }); 
      await alert.present();
    
    }
    
  }