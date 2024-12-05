import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ParsesComponent } from './parses.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ParsesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ParsesComponent],
	providers: []
})
export class ParsesModule {}
