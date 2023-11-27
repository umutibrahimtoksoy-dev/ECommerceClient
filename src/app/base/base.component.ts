import { NgxSpinnerService } from 'ngx-spinner';
export class BaseComponent {
  constructor(private spinner : NgxSpinnerService){}

  showSpinner(spinnerType : SpinnerType = SpinnerType.SquareJellyBox){
this.spinner.show(spinnerType);

setTimeout(() => this.hideSpinner(spinnerType),200)
  }

  hideSpinner(spinnerType : SpinnerType){
    this.spinner.hide(spinnerType);
      }
}

export enum SpinnerType{
  SquareJellyBox = "squareJellyBox",
  BallScalePulse = "ballScalePulse",
  BallNewtonCradle = "ballNewtonCradle"
}