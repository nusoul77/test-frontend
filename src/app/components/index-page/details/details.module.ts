import { NgModule } from "@angular/core";
import { DetailsComponent } from "./details.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// import { BrowserModule } from "@angular/platform-browser";

@NgModule({
	declarations: [DetailsComponent],
	imports: [CommonModule, RouterModule, FormsModule],
	exports: [DetailsComponent],
})
export class DetailsModule {}
