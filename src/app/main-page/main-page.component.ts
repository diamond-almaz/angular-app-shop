import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/assets/types';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  categories$: Observable<string[]> = new Observable();

  constructor(public dataService: DataService) {
    this.categories$ = this.dataService.categories$
  }

  ngOnInit(): void {
  }

  onAddCartProduct(product: IProduct) {
    console.log(product)
    this.dataService.addProductToCart(product)
  }

}
