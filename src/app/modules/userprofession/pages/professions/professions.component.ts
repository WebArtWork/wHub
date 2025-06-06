import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { UserprofessionService } from '../../services/userprofession.service';
import { Userprofession } from '../../interfaces/userprofession.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { userprofessionFormComponents } from '../../formcomponents/userprofession.formcomponents';

@Component({
	templateUrl: './professions.component.html',
	styleUrls: ['./professions.component.scss'],
	standalone: false
})
export class ProfessionsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.prepareForm(userprofessionFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Userprofession>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._preCreate(created as Userprofession);

					this._userprofessionService.create(
						created as Userprofession
					);

					close();
				}
			});
		},
		update: (doc: Userprofession): void => {
			this._form
				.modal<Userprofession>(this.form, [], doc)
				.then((updated: Userprofession) => {
					this._core.copy(updated, doc);

					this._userprofessionService.update(doc);
				});
		},
		delete: (doc: Userprofession): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this userprofession?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._userprofessionService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Userprofession): void => {
					this._form.modalUnique<Userprofession>(
						'userprofession',
						'url',
						doc
					);
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

	get rows(): Userprofession[] {
		return this._userprofessionService.userprofessions;
	}

	constructor(
		private _translate: TranslateService,
		private _userprofessionService: UserprofessionService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Userprofession>(create ? [] : this.rows)
				.then((userprofessions: Userprofession[]) => {
					if (create) {
						for (const userprofession of userprofessions) {
							this._preCreate(userprofession);

							this._userprofessionService.create(userprofession);
						}
					} else {
						for (const userprofession of this.rows) {
							if (
								!userprofessions.find(
									(localUserprofession) =>
										localUserprofession._id ===
										userprofession._id
								)
							) {
								this._userprofessionService.delete(
									userprofession
								);
							}
						}

						for (const userprofession of userprofessions) {
							const localUserprofession = this.rows.find(
								(localUserprofession) =>
									localUserprofession._id ===
									userprofession._id
							);

							if (localUserprofession) {
								this._core.copy(
									userprofession,
									localUserprofession
								);

								this._userprofessionService.update(
									localUserprofession
								);
							} else {
								this._preCreate(userprofession);

								this._userprofessionService.create(
									userprofession
								);
							}
						}
					}
				});
		};
	}

	private _preCreate(userprofession: Userprofession): void {
		delete userprofession.__created;
	}
}
