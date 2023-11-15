import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, alertifyOptions : Partial<AlertifyOptions>){
    alertify.set('notifier','position', alertifyOptions.position);
    alertify.set('notifier','delay', alertifyOptions.delay);
    const msg = alertify[alertifyOptions.messageType](message);
    
    if(alertifyOptions.dismissOther){
      msg.dismissOthers();
    }
  }

  dismiss()
  {
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType : MessageType = MessageType.Message;
  position : Position = Position.BottomLeft;
  delay : number = 2;
  dismissOther : boolean = true;
}

export enum Position{
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}
