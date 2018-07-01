import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerSelectPage } from './player-select';

@NgModule({
  declarations: [
    PlayerSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerSelectPage),
  ],
})
export class PlayerSelectPageModule {}
