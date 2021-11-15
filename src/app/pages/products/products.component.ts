import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { PRODUCTS } from "src/app/shared/products";
import { getCurrency, formatCurrency } from 'src/app/utils/helpers';
import { CurrencyConverterService } from 'src/app/shared/services/currency-converter.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  dataSource: any = new MatTableDataSource<any>([]);
  page: any = 1;
  loading: boolean = false;
  userCurrency: any = 'USD';

  searchIcon = faSearch;

  selectedSelect: any;
  nativeSelectId: any;
  tempData: any = [];

  durationInSeconds = 5;
  displayedColumns: string[] = [
    'product',
    'code',
    'release-date',
    'price',
    'rating',
  ];

  ratings: number[] = [1, 2, 3, 4, 5];

  destroy$ = new Subject();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private currencyConverter: CurrencyConverterService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    // Local Storage
    if (localStorage.getItem("products") && typeof (Storage) !== undefined) {
      this.dataSource.data = JSON.parse(localStorage.getItem("products") || '[]'); // Alternatively use null-assertion operator
      this.loading = false;
    } else {
      this.dataSource.data = PRODUCTS;
      this.getUserCurrency();
      // Convert Product Price to reflect the Visitor's Own Country Currency 
      this.convertProductPrice();
    }
  }

  getUserCurrency(): void {
    this.currencyConverter.getUserCountry().subscribe((res) => {
      const countryCode = (res.countryCode) ? res.countryCode : 'US';
      this.userCurrency = getCurrency(countryCode);
    }, (error) => {
      console.log("ERROR: ", error.message);
      // Fallback in case API is blocked by cors
      const countryCode = 'US';
      this.userCurrency = getCurrency(countryCode);
    });
  }

  convertProductPrice(): void {
    this.currencyConverter.currencyConverter().subscribe((res) => {
      const rate = (res.rates[this.userCurrency.currency]) ? res.rates[this.userCurrency.currency] : 1;
      this.dataSource.data.forEach((product: any) => {
        const newPrice = product.price * rate;
        product.price = formatCurrency(newPrice, this.userCurrency.currency);
      });
      localStorage.setItem("products", JSON.stringify(this.dataSource.data));
      this.loading = false;
    }, (error) => {
      console.log("ERROR: ", error.message);
      this.loading = false;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.hidePageSize = true;
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  displayProduct(data: any) {
    this.router.navigateByUrl(`products/${data.productId}`);
  }

  searchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
