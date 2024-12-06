import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { ParseService } from '../../services/parse.service';
import { Parse } from '../../interfaces/parse.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { parseFormComponents } from '../../formcomponents/parse.formcomponents';

@Component({
	templateUrl: './parses.component.html',
	styleUrls: ['./parses.component.scss'],
	standalone: false
})
export class ParsesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('parse', parseFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Parse>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._preCreate(created as Parse);

					this._parseService.create(created as Parse);

					close();
				}
			});
		},
		update: (doc: Parse): void => {
			this._form
				.modal<Parse>(this.form, [], doc)
				.then((updated: Parse) => {
					this._core.copy(updated, doc);

					this._parseService.update(doc);
				});
		},
		delete: (doc: Parse): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this parse?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._parseService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Parse): void => {
					this._form.modalUnique<Parse>('parse', 'url', doc);
				}
			}
		],
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
		]
	};

	get rows(): Parse[] {
		return this._parseService.parses;
	}

	constructor(
		private _translate: TranslateService,
		private _parseService: ParseService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Parse>(create ? [] : this.rows)
				.then((parses: Parse[]) => {
					if (create) {
						for (const parse of parses) {
							this._preCreate(parse);

							this._parseService.create(parse);
						}
					} else {
						for (const parse of this.rows) {
							if (
								!parses.find(
									(localParse) => localParse._id === parse._id
								)
							) {
								this._parseService.delete(parse);
							}
						}

						for (const parse of parses) {
							const localParse = this.rows.find(
								(localParse) => localParse._id === parse._id
							);

							if (localParse) {
								this._core.copy(parse, localParse);

								this._parseService.update(localParse);
							} else {
								this._preCreate(parse);

								this._parseService.create(parse);
							}
						}
					}
				});
		};
	}

	private _preCreate(parse: Parse): void {
		parse.__created;
	}
}
