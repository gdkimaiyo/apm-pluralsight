import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { PRODUCTS } from "./products";

import { faSearch } from '@fortawesome/free-solid-svg-icons';


interface FilterOption {
  value: string;
  label: string;
  groupName: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>([]);
  page: any = 1;
  loading: boolean = false;

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

  destroy$ = new Subject();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    console.log(PRODUCTS);
    this.dataSource.data = PRODUCTS;
    this.loading = false;
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
    console.log("Selected Product: ", data);
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
