import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ProductsComponent
	},
	{
		path: ':commerce_id',
		component: ProductsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ProductsComponent],
	providers: []
})
export class CommerceproductModule {}
