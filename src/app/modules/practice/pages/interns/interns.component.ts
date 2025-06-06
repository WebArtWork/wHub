import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { PracticeService } from '../../services/practice.service';
import { Practice } from '../../interfaces/practice.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { practiceFormComponents } from '../../formcomponents/practice.formcomponents';

@Component({
	templateUrl: './interns.component.html',
	styleUrls: ['./interns.component.scss'],
	standalone: false
})
export class InternsComponent {
	columns = ['inc', 'thumb', 'name', 'url'];

	form: FormInterface = this._form.prepareForm(practiceFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Practice>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._practiceService.create(created as Practice);

					close();
				}
			});
		},
		update: (doc: Practice): void => {
			this._form
				.modal<Practice>(this.form, [], doc)
				.then((updated: Practice) => {
					this._core.copy(updated, doc);

					this._practiceService.update(doc);
				});
		},
		delete: (doc: Practice): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this practice?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._practiceService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Practice): void => {
					this._form.modalUnique<Practice>('practice', 'url', doc);
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

	get rows(): Practice[] {
		return this._practiceService.practices;
	}

	constructor(
		private _translate: TranslateService,
		private _practiceService: PracticeService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Practice>(create ? [] : this.rows)
				.then((practices: Practice[]) => {
					if (create) {
						for (const practice of practices) {
							this._practiceService.create(practice);
						}
					} else {
						for (const practice of practices) {
							const localPractice = this.rows.find(
								(localPractice) =>
									localPractice._id === practice._id
							);

							if (localPractice) {
								this._core.copy(practice, localPractice);

								this._practiceService.update(localPractice);
							} else {
								this._practiceService.delete(practice);
							}
						}
					}
				});
		};
	}
}
