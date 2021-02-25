import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexPageRoutes } from "./index-page.routes";

const routes: Routes = IndexPageRoutes;

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndexPageRoutingModule {}
