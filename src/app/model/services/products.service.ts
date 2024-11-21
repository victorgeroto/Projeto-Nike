import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Nike Air Force AQUA', price: 150.0, image_url: './1.webp', description: 'The insole are confortable so you can'},
    {id: 2, name: 'Nike Air Force OFF WHITE', price: 140.0, image_url: './2.webp', description: 'The insole are confortable so you can'},
    {id: 3, name: 'Nike Air Force RED ', price: 130.0, image_url: './3.png', description: 'The insole are confortable so you can'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
