import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './pages/home-page/home-page.module';
import { CarouselModule } from 'primeng/carousel';
import { CardListComponent } from './card-list/card-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
var config = {
  apiKey: 'AIzaSyBoWuAZQVYUkZUXbgznHZocbuHuTwYMKaI',
  authDomain: 'beautfy-f47e0.firebaseapp.com',
  databaseURL: 'https://beautfy-f47e0-default-rtdb.firebaseio.com',
  projectId: 'beautfy-f47e0',
  storageBucket: 'beautfy-f47e0.appspot.com',
  messagingSenderId: '711953616124',
  appId: '1:711953616124:web:fb1cf52b6a4b44b3371b79',
  measurementId: 'G-3M9EK8PFQH',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    CarousalComponent,
    CardListComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ParallaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomePageModule,
    CarouselModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class YourAppModule {}
