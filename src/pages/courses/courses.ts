import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {GolfApi} from "../../Service/golf-api";
import {DifficultyPage} from "../difficulty/difficulty";

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  selectedItem: any;
  private courses: Array<{ name: string, id: number, image: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public golfApi: GolfApi,
    public loadingCtrl: LoadingController
  ) {
    this.selectedItem = navParams.get('item');
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');

    const loader = this.loadingCtrl.create({
      content: "getting courses..."
    });
    loader.present().then(() => {
      this.golfApi.getCourses().subscribe(data => {
        this.courses = data.courses;
        loader.dismiss();
        console.log(this.courses);
      });
    });
  }

  itemTapped(event, courseId) {
    this.navCtrl.push(DifficultyPage, {
      courseId: courseId
    });
  }

}
