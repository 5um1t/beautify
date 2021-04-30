import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [ProfileCardComponent, HomePageComponent],
  imports: [CommonModule],
})
export class HomePageModule {}
