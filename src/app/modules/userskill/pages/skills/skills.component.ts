import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { UserskillService } from '../../services/userskill.service';
import { Userskill } from '../../interfaces/userskill.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { userskillFormComponents } from '../../formcomponents/userskill.formcomponents';

@Component({
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	standalone: false,
})
export class SkillsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('userskill', userskillFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Userskill>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._preCreate(created as Userskill);

					this._userskillService.create(created as Userskill);

					close();
				},
			});
		},
		update: (doc: Userskill): void => {
			this._form
				.modal<Userskill>(this.form, [], doc)
				.then((updated: Userskill) => {
					this._core.copy(updated, doc);

					this._userskillService.update(doc);
				});
		},
		delete: (doc: Userskill): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this userskill?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._userskillService.delete(doc);
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Userskill): void => {
					this._form.modalUnique<Userskill>('userskill', 'url', doc);
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

	get rows(): Userskill[] {
		return this._userskillService.userskills;
	}

	constructor(
		private _translate: TranslateService,
		private _userskillService: UserskillService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Userskill>(create ? [] : this.rows)
				.then((userskills: Userskill[]) => {
					if (create) {
						for (const userskill of userskills) {
							this._preCreate(userskill);

							this._userskillService.create(userskill);
						}
					} else {
						for (const userskill of this.rows) {
							if (
								!userskills.find(
									(localUserskill) => localUserskill._id === userskill._id
								)
							) {
								this._userskillService.delete(userskill);
							}
						}

						for (const userskill of userskills) {
							const localUserskill = this.rows.find(
								(localUserskill) => localUserskill._id === userskill._id
							);

							if (localUserskill) {
								this._core.copy(userskill, localUserskill);

								this._userskillService.update(localUserskill);
							} else {
								this._preCreate(userskill);

								this._userskillService.create(userskill);
							}
						}
					}
				});
		};
	}

	private _preCreate(userskill: Userskill): void {
		delete userskill.__created;
	}
}
