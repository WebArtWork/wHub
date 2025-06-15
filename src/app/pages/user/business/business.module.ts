import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { BusinessComponent } from './business.component';

const routes: Routes = [
	{
		path: ':_id',
		component: BusinessComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [BusinessComponent]
})
export class BusinessModule {}
