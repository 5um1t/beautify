import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProfileCard } from 'src/app/types/interface';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.sass'],
})
export class ProfileCardComponent implements OnInit {
  @Input('data') data!: IProfileCard;
  @Output('okClick') okClickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  // public onOkClicked(event) {
  //   this.logger.trace(
  //     'ProfileCardComponent :: onOkClicked :: Entering onOkClicked with value',
  //     event
  //   );
  //   this.okClickEvent.emit('Ok button clicked');
  //   this.logger.info('emitted value');
  //   this.logger.trace(
  //     'ProfileCardComponent :: onOkClicked :: Leaving onOkCliked',
  //     event
  //   );
  // }
}
