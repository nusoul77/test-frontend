import { NgModule } from "@angular/core";
import { DetailsComponent } from "./details.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [DetailsComponent],
	imports: [CommonModule, RouterModule],
	exports: [DetailsComponent],
})
export class DetailsModule {}
