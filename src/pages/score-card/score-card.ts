import {Component} from '@angular/core';
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
  holesIn: Array<any> = [];
  holesOut: Array<any> = [];
  difficulty: string;
  difficultyIndex:number = 0;
  totalYardsIn: number = 0;
  totalParIn: number = 0;
  totalHCPIn:number = 0;
  totalYardsOut: number = 0;
  totalParOut: number = 0;
  totalHCPOut: number = 0;

  ionViewDidLoad() {

    console.log('ionViewDidLoad ScoreCardPage');
    this.params = this.navParams.data;
    console.log('the params ');
    console.log(  this.params );

    this.golfApi.getCourseDetails(this.navParams.data.courseInfo.courseId.id).subscribe(data => {

      this.courseDetails = data.data;
      this.holes = this.courseDetails.holes;
      this.difficulty = this.navParams.data.courseInfo.difficulty.difficulty;
      this.difficultyIndex = this.navParams.data.courseInfo.difficulty.indexNum;

      console.log('difficulty index')
      console.log(this.difficultyIndex)

      for (let i = 0; i < 9; i++){
        this.holesIn.push(this.courseDetails.holes[i]);
      }
      for (let i = 9; i < 18; i++){
        this.holesOut.push(this.courseDetails.holes[i])
      }
      for (let i = 0; i < this.holesIn.length; i++){
        this.totalYardsIn += Number(this.holesIn[i].teeBoxes[this.difficultyIndex].yards);
        this.totalParIn += Number(this.holesIn[i].teeBoxes[this.difficultyIndex].par);
        this.totalHCPIn += Number(this.holesIn[i].teeBoxes[this.difficultyIndex].hcp);
      }
      for (let i = 0; i < this.holesOut.length; i++){
        this.totalYardsOut += Number(this.holesOut[i].teeBoxes[this.difficultyIndex].yards);
        this.totalParOut += Number(this.holesOut[i].teeBoxes[this.difficultyIndex].par);
        this.totalHCPOut += Number(this.holesOut[i].teeBoxes[this.difficultyIndex].hcp);
      }
      console.log('holes In');
      console.log(this.holesIn);
      console.log('holes Out');
      console.log(this.holesOut);



      console.log('course details ');
      console.log( this.courseDetails );
      this.players = this.params.numberOfPlayers;
      console.log(this.params.numberOfPlayers);
      for(let i = 0; i < this.players; i++){
        this.pArray.push('player ' + (i+1));
      }
      console.log(`this.pArray = [ ${this.pArray} ]`);
    });

    document.addEventListener("DOMContentLoaded", function(event) {
      //do work
    });



  }


}
