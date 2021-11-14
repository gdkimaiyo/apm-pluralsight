import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    FontAwesomeModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    FontAwesomeModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule { }
