import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { CommerceproductService } from '../../services/commerceproduct.service';
import { Commerceproduct } from '../../interfaces/commerceproduct.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { commerceproductFormComponents } from '../../formcomponents/commerceproduct.formcomponents';
import { Router } from '@angular/router';

@Component({
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    standalone: false
})
export class ProductsComponent {
	commerce = this._router.url.includes('/products/')
		? this._router.url.replace('/products/', '')
		: '';

	columns = ['name', 'price'];

	form: FormInterface = this._form.getForm(
		'commerceproduct',
		commerceproductFormComponents
	);

	config = {
		create: (): void => {
			this._form.modal<Commerceproduct>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					if (this.commerce) {
						(created as Commerceproduct).commerce = this.commerce;
					}

					this._cps.create(created as Commerceproduct);

					close();
				}
			});
		},
		update: (doc: Commerceproduct): void => {
			this._form
				.modal<Commerceproduct>(this.form, [], doc)
				.then((updated: Commerceproduct) => {
					this._core.copy(updated, doc);

					this._cps.update(doc);
				});
		},
		delete: (doc: Commerceproduct): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this commerceproduct?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._cps.delete(doc);
						}
					}
				]
			});
		},
		headerButtons: [
			{
				icon: 'edit_note',
				click: (): void => {
					// for (const product of products) {
					// 	if (this.commerce) {
					// 		product.commerce = this.commerce
					// 	}

					// 	this._cps.create(product);
					// }
				}
			},
			{
				icon: 'playlist_add',
				click: (): void => {
					// for (const product of products) {
					// 	if (this.commerce) {
					// 		product.commerce = this.commerce
					// 	}

					// 	this._cps.create(product);
					// }
				}
			}
		],
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Commerceproduct): void => {
					this._form.modalUnique<Commerceproduct>(
						'commerceproduct',
						'url',
						doc
					);
				}
			}
		]
	};

	get rows(): Commerceproduct[] {
		return this.commerce
			? this._cps.commerceproductsByCommerce[this.commerce]
			: this._cps.commerceproducts;
	}

	constructor(
		private _cps: CommerceproductService,
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService,
		private _router: Router
	) {}
}
