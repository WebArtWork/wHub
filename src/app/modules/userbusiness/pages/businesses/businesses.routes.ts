import { Routes } from '@angular/router';
import { BusinessesComponent } from './businesses.component';

export const businessesRoutes: Routes = [
	{
		path: '',
		component: BusinessesComponent
	},
	{
		path: 'all',
		component: BusinessesComponent
	}
];
