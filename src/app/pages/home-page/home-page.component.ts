import { Component, OnInit } from '@angular/core';
import { PROFILE_LIST } from 'src/app/types/constants';
import { IProfileCard } from 'src/app/types/interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {
  public profileCardList: IProfileCard[] = PROFILE_LIST;
  constructor() {}

  ngOnInit(): void {}
  public okClicked(event: any) {
    console.log(event);
  }
}
