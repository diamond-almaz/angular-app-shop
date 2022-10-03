import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICartProduct, IProduct } from 'src/assets/types';
import { Observable, tap } from 'rxjs';


const BASE_URL = 'https://fakestoreapi.com/products';

@Injectable()
export class DataService {

    categories$!: Observable<string[]>;

    products: IProduct[] = [];

    cartsProducts: { [id: number]: ICartProduct  } = {};
    constructor(private httpClient: HttpClient) {

    }

     getAllCategories() {
        this.categories$ = this.httpClient.get<string[]>(`${BASE_URL}/categories`)
        .pipe(
            tap((categories: string[]) => {
                console.log('categories', categories)
                this.getProductsByCategory(categories[0])
            })
        )
     }

     getProductsByCategory(categoryName: string) {
        return this.httpClient.get(`${BASE_URL}/category/${categoryName}`).subscribe((newProducts: any) => {
            this.products = newProducts as IProduct[];
        })
     }

     addProductToCart(product: IProduct) {
        if (this.cartsProducts[product.id] === undefined) {
            this.cartsProducts[product.id] = {
                ...product,
                count: 1,
            }
        } else {
            this.cartsProducts[product.id] = {
                ...product,
                count: this.cartsProducts[product.id].count + 1,
            }
        }
     }
    
}