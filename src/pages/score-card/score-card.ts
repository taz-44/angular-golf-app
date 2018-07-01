import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GolfApi} from "../../Service/golf-api";

/**
 * Generated class for the ScoreCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-card',
  templateUrl: 'score-card.html',
})
export class ScoreCardPage {

  public params: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public golfApi: GolfApi)
  {}

  courseDetails:any;
  pArray: Array<any> = [];
  players;
  holes;
  difficulty:string;
  difficultyIndex:number;

  ionViewDidLoad() {

    console.log('ionViewDidLoad ScoreCardPage');
    this.params = this.navParams.data;
    console.log(this.params);

    this.golfApi.getCourseDetails(this.navParams.data.courseInfo.courseId.id).subscribe(data => {
      this.courseDetails = data.data;
      this.holes = this.courseDetails.holes;
      this.difficulty = this.navParams.data.courseInfo.difficulty.difficulty;
      this.difficultyIndex = this.navParams.data.courseInfo.difficulty.indexNum;

      console.log(this.courseDetails);
      this.players = this.params.numberOfPlayers;
      console.log(this.params.numberOfPlayers);
      for(let i = 0; i < this.players; i++){
        this.pArray.push('player ' + (i+1));
      }
      console.log(`this.pArray = [ ${this.pArray} ]`);

    });





  }








}
