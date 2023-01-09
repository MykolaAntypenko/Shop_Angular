import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product-service/products.service';
import { IProduct } from '../../models/product.interface';
import { CartService } from '../../../cart/services/cart-service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: IProduct[];
  constructor(
      private productsService: ProductsService,
      private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: IProduct): void {
    this.cartService.cartItems.push(product);
    this.cartService.addCartItem(this.cartService.cartItems);
  }
}
