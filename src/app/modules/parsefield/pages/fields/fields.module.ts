import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { FieldsComponent } from './fields.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: FieldsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [FieldsComponent],
	providers: []
})
export class FieldsModule {}
