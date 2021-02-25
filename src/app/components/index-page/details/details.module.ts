import { NgModule } from "@angular/core";
import { DetailsComponent } from "./details.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

@NgModule({
	declarations: [DetailsComponent],
	imports: [CommonModule, RouterModule, FormsModule, MatCardModule],
	exports: [DetailsComponent],
})
export class DetailsModule {}
