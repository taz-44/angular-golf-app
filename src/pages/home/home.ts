import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CoursesPage} from "../courses/courses";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  selectCourse(){
    this.navCtrl.push(CoursesPage);
  }

}
