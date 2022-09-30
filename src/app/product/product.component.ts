import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/assets/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() newCartProduct = new EventEmitter<IProduct>();
  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.newCartProduct.emit(this.product);
  }

}
