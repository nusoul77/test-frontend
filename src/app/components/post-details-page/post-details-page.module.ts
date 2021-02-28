import { NgModule } from '@angular/core';
import { PostDetailsPageComponent } from './post-details-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [PostDetailsPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BreadcrumbsModule,
  ],
  exports: [PostDetailsPageComponent],
})
export class PostDetailsPageModule {}
