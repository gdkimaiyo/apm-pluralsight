import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from "src/app/pages/products/products";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: any; 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.selectedProduct = PRODUCTS.filter((product: any) => id === product.productId);
    } else {
      console.log("INVALID Product Id, Re-routing...");
    }

    console.log("SELECTED PRODUCT: ", this.selectedProduct);
  }
}
