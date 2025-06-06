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

	form: FormInterface = this._form.prepareForm(commerceproductFormComponents);

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
					console.log(updated);
					console.log(doc);

					this._core.copy(updated, doc);

					console.log(doc);
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
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist'
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit'
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
			? this._cps.commerceproductsByCommerce[this.commerce] || []
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

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Commerceproduct>(create ? [] : this.rows)
				.then((products: Commerceproduct[]) => {
					if (create) {
						for (const practice of products) {
							if (this.commerce) {
								practice.commerce = this.commerce;
							}

							this._cps.create(practice);
						}
					} else {
						for (const practice of this.rows) {
							if (
								!products.find(
									(localPractice) =>
										localPractice._id === practice._id
								)
							) {
								this._cps.delete(practice);
							}
						}

						for (const practice of products) {
							const localPractice = this.rows.find(
								(localPractice) =>
									localPractice._id === practice._id
							);

							if (localPractice) {
								this._core.copy(practice, localPractice);

								this._cps.update(localPractice);
							} else {
								if (this.commerce) {
									practice.commerce = this.commerce;
								}

								this._cps.create(practice);
							}
						}
					}
				});
		};
	}
}
