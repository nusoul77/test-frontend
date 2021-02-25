import { NgModule } from "@angular/core";
import { DetailsComponent } from "./details.component";
import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [DetailsComponent],
	imports: [CommonModule, RouterModule, BrowserModule],
	exports: [DetailsComponent],
})
export class DetailsModule {}
