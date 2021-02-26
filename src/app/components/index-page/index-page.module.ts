import { NgModule } from '@angular/core';
import { IndexPageComponent } from './index-page.component';
import { IndexPageRoutingModule } from './index-page-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DetailsModule } from './details/details.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    IndexPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    DetailsModule,
    NgxPaginationModule,
    MatTooltipModule,
  ],
  exports: [IndexPageComponent],
})
export class IndexPageModule {}
