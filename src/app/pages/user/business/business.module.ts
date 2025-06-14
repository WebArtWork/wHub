import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { BusinessComponent } from './business.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: BusinessComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [BusinessComponent]
})
export class BusinessModule {}
