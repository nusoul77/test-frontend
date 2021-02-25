import { Routes } from "@angular/router";
import { IndexPageComponent } from "./index-page.component";
import { DetailsComponent } from "./details/details.component";

export const IndexPageRoutes: Routes = [
	{
		path: "",
		component: IndexPageComponent,
	},
	{
		path: "details/:id",
		component: DetailsComponent,
	},
];
