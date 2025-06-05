import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { UsertoolService } from '../../services/usertool.service';
import { Usertool } from '../../interfaces/usertool.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { usertoolFormComponents } from '../../formcomponents/usertool.formcomponents';

@Component({
	templateUrl: './tools.component.html',
	styleUrls: ['./tools.component.scss'],
	standalone: false,
})
export class ToolsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('usertool', usertoolFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Usertool>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._preCreate(created as Usertool);

					this._usertoolService.create(created as Usertool);

					close();
				},
			});
		},
		update: (doc: Usertool): void => {
			this._form
				.modal<Usertool>(this.form, [], doc)
				.then((updated: Usertool) => {
					this._core.copy(updated, doc);

					this._usertoolService.update(doc);
				});
		},
		delete: (doc: Usertool): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this usertool?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._usertoolService.delete(doc);
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Usertool): void => {
					this._form.modalUnique<Usertool>('usertool', 'url', doc);
				},
			},
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
		],
	};

	get rows(): Usertool[] {
		return this._usertoolService.usertools;
	}

	constructor(
		private _translate: TranslateService,
		private _usertoolService: UsertoolService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Usertool>(create ? [] : this.rows)
				.then((usertools: Usertool[]) => {
					if (create) {
						for (const usertool of usertools) {
							this._preCreate(usertool);

							this._usertoolService.create(usertool);
						}
					} else {
						for (const usertool of this.rows) {
							if (
								!usertools.find(
									(localUsertool) => localUsertool._id === usertool._id
								)
							) {
								this._usertoolService.delete(usertool);
							}
						}

						for (const usertool of usertools) {
							const localUsertool = this.rows.find(
								(localUsertool) => localUsertool._id === usertool._id
							);

							if (localUsertool) {
								this._core.copy(usertool, localUsertool);

								this._usertoolService.update(localUsertool);
							} else {
								this._preCreate(usertool);

								this._usertoolService.create(usertool);
							}
						}
					}
				});
		};
	}

	private _preCreate(usertool: Usertool): void {
		delete usertool.__created;
	}
}
