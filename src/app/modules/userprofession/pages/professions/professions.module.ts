import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ProfessionsComponent } from './professions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ProfessionsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ProfessionsComponent],
	providers: []
})
export class ProfessionsModule {}
