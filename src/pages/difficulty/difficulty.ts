import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GolfApi} from "../../Service/golf-api";
import {PlayerSelectPage} from "../player-select/player-select";

/**
 * Generated class for the DifficultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-difficulty',
  templateUrl: 'difficulty.html',
})
export class DifficultyPage {

  public courseId: any;
  teeBoxDetails: any;
  difficulties: Array<object> = [];
  boxTeesLength: number;
  indexOf: Array<object> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public golfApi: GolfApi
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DifficultyPage');
    this.courseId = this.navParams.data.courseId.id;
    console.log('course ID #' + this.courseId);

    this.golfApi.getCourseDetails(this.courseId).subscribe(data => {
      this.teeBoxDetails = data.data;
      this.boxTeesLength = this.teeBoxDetails.holes[0].teeBoxes.length;
      for(let i = 0; i < this.boxTeesLength; i++){
        if(this.teeBoxDetails.holes[0].teeBoxes[i].teeType !== "auto change location") {
          this.difficulties.push({ 'difficulty': this.teeBoxDetails.holes[0].teeBoxes[i].teeType , 'indexNum': i });
        }
      }
      console.log(this.difficulties);

    });

  }

  selectedDifficulty(event, courseId, difficulty){
    this.navCtrl.push(PlayerSelectPage, {
      courseId: courseId,
      difficulty: difficulty
    });
  }

}


