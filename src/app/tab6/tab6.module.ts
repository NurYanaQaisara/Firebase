import { IonicModule, AlertController } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab6Page } from './tab6.page';
import { AuthService } from '../services/auth.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab6Page }])
  ],
  declarations: [Tab6Page]
})



export class Tab6PageModule {

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }
  
    async logOut(form):Promise<void>{
      this.authService.logOutUser().
      then(
        ()=>{
          this.router.navigateByUrl('login');
        },
        async error => {
          const alert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text: 'ok', role:'cancel'}],
          });
          await alert.present();
        }
      )
    }
  
  }

