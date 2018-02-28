import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router, NavigationStart, NavigationEnd} from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
const routes: Routes = [
		{
		path: '',
		component: HomeComponent,
		data : {
			title: 'RW Build & Decor'
		}
	}
];

export const navigatableComponents = [
	HomeComponent,
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}