import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { Product } from 'src/app/contracts/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){
  super(spinner)
}

  ngOnInit(): void {
    this.showSpinner();
  }
}
