import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    MatBadgeModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
  ],
  exports: [
    MatBadgeModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
  ]
})
export class MaterialModule { }
