import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) { }  
  message(message:string,title:string,options:Partial<ToastrOptions>){
    this.toastr[options.MessageType](message,title, {
      positionClass : options.Position
    });
  }
}

export class ToastrOptions{
  MessageType : ToastrMessageType
  Position : ToastrPosition
}

export enum ToastrMessageType{
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error"
}

export enum ToastrPosition{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}