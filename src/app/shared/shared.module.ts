import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './star/star.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    StarComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    FontAwesomeModule,
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
