import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostDetailsPageModule } from '../post-details-page/post-details-page.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule,
    PostDetailsPageModule,
    NgxPaginationModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
