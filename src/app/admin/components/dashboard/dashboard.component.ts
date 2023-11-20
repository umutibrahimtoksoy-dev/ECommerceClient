import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

constructor(private alertify : AlertifyService){}

ngOnInit(): void {
  }
  alertMessage()
  {
    this.alertify.message("Hello World", {
      messageType : MessageType.Success,
      position : Position.TopCenter,
      delay : 3,
      dismissOther : false
     });
  }

  dismissMessage()
  {
    this.alertify.dismiss();
  }
}