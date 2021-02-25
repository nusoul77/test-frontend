import { NgModule } from "@angular/core";
import { IndexPageComponent } from "./index-page.component";
import { IndexPageRoutingModule } from "./index-page-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
	declarations: [IndexPageComponent],
	imports: [
		CommonModule,
		RouterModule,
		IndexPageRoutingModule,
		MatCardModule,
		MatButtonModule,
		FlexLayoutModule,
	],
	exports: [IndexPageComponent],
})
export class IndexPageModule {}
