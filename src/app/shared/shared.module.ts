import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './star/star.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    StarComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
    FontAwesomeModule,
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    MatMenuModule,
    MatListModule,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
