import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { InternsComponent } from './interns.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: InternsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [InternsComponent],
	providers: []
})
export class InternsModule {}
