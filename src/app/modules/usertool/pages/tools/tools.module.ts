import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ToolsComponent } from './tools.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ToolsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ToolsComponent],
	providers: []
})
export class ToolsModule {}
