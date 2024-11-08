import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TokensComponent } from './tokens.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: TokensComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [TokensComponent],
	providers: []
})
export class UsertokenModule {}
