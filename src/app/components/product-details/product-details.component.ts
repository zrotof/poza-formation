import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [DialogService]
})
export class ProductDetailsComponent implements OnInit {

@Input() product : any | undefined ;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

}
