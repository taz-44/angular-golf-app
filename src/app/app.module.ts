import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CoursesPage} from "../pages/courses/courses";
import {DifficultyPage} from "../pages/difficulty/difficulty";
import {PlayerSelectPage} from "../pages/player-select/player-select";
import {ScoreCardPage} from "../pages/score-card/score-card";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GolfApi} from "../Service/golf-api";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursesPage,
    DifficultyPage,
    PlayerSelectPage,
    ScoreCardPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursesPage,
    DifficultyPage,
    PlayerSelectPage,
    ScoreCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GolfApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
