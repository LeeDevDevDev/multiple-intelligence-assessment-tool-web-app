import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreModule
} from '@angular/fire/firestore';
import { MainComponent } from './components/main/main.component';
import { AuthService } from './services/common/auth.service';
import { NgZorroModule } from './modules/ng-zorro/ng-zorro.module';
import { GamesComponent } from './components/main/games/games.component';
import { StudentsComponent } from './components/main/students/students.component';
import { GameService } from './services/game.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    GamesComponent,
    StudentsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AuthService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule {}
