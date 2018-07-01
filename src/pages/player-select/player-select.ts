import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GolfApi} from "../../Service/golf-api";
import {ScoreCardPage} from "../score-card/score-card";


@IonicPage()
@Component({
  selector: 'page-player-select',
  templateUrl: 'player-select.html',
})
export class PlayerSelectPage {

  public params: any = {};
  public numberValue: number;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public golfApi: GolfApi
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerSelectPage');
    this.params = this.navParams.data;
    console.log(this.params);




  }

  logStuff(){
    console.log(this.numberValue);
  }

  selectNumberOfPlayers(event, courseInfo, numberOfPlayers:number){
    this.navCtrl.push(ScoreCardPage, {
      courseInfo: courseInfo,
      numberOfPlayers: numberOfPlayers


    });
  }

}
