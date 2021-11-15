import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from "src/app/shared/products";

import { faArrowLeft, faListUl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: any;
  ratings: number[] = [1, 2, 3, 4, 5];
  default: boolean = true;

  backArrow = faArrowLeft;
  emptyList = faListUl;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      if (localStorage.getItem("products") && typeof (Storage) !== undefined) {
        const data = JSON.parse(localStorage.getItem("products") || '[]'); // Alternatively use null-assertion operator
        data.forEach((product: any) => {
          if (id === product.productId) {
            this.selectedProduct = { ...product };
          }
        });
        this.default = false;
      } else {
        // ONLY load when data has not been saved in localStorage
        PRODUCTS.forEach((product: any) => {
          if (id === product.productId) {
            this.selectedProduct = { ...product };
          }
        });
      }
    }
  }

  goBack(): void {
    this.router.navigateByUrl('products');
  }

  scrollTo(element: any): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
}
