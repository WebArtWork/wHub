import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: UserComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [UserComponent]
})
export class UserModule {}
