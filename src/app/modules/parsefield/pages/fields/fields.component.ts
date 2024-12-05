import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { ParsefieldService } from '../../services/parsefield.service';
import { Parsefield } from '../../interfaces/parsefield.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { parsefieldFormComponents } from '../../formcomponents/parsefield.formcomponents';

@Component({
	templateUrl: './fields.component.html',
	styleUrls: ['./fields.component.scss'],
	standalone: false
})
export class FieldsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('parsefield', parsefieldFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Parsefield>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._preCreate(created as Parsefield);

					this._parsefieldService.create(created as Parsefield);

					close();
				}
			});
		},
		update: (doc: Parsefield): void => {
			this._form.modal<Parsefield>(this.form, [], doc).then((updated: Parsefield) => {
				this._core.copy(updated, doc);

				this._parsefieldService.update(doc);
			});
		},
		delete: (doc: Parsefield): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this parsefield?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._parsefieldService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Parsefield): void => {
					this._form.modalUnique<Parsefield>('parsefield', 'url', doc);
				}
			}
		],
		headerButtons: [
			{
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist',
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit',
			},
		]
	};

	get rows(): Parsefield[] {
		return this._parsefieldService.parsefields;
	}

	constructor(
		private _translate: TranslateService,
		private _parsefieldService: ParsefieldService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Parsefield>(create ? [] : this.rows)
				.then((parsefields: Parsefield[]) => {
					if (create) {
						for (const parsefield of parsefields) {
							this._preCreate(parsefield);

							this._parsefieldService.create(parsefield);
						}
					} else {
						for (const parsefield of this.rows) {
							if (!parsefields.find(
								localParsefield => localParsefield._id === parsefield._id
							)) {
								this._parsefieldService.delete(parsefield);
							}
						}

						for (const parsefield of parsefields) {
							const localParsefield = this.rows.find(
								localParsefield => localParsefield._id === parsefield._id
							);

							if (localParsefield) {
								this._core.copy(parsefield, localParsefield);

								this._parsefieldService.update(localParsefield);
							} else {
								this._preCreate(parsefield);

								this._parsefieldService.create(parsefield);
							}
						}
					}
				});
		};
	}

	private _preCreate(parsefield: Parsefield): void {
		parsefield.__created;
	}
}
