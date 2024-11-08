import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { UsertokenService } from '../../services/usertoken.service';
import { Usertoken } from '../../interfaces/usertoken.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { usertokenFormComponents } from '../../formcomponents/usertoken.formcomponents';

@Component({
	templateUrl: './tokens.component.html',
	styleUrls: ['./tokens.component.scss']
})
export class TokensComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('usertoken', usertokenFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Usertoken>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._usertokenService.create(created as Usertoken);

					close();
				}
			});
		},
		update: (doc: Usertoken): void => {
			this._form.modal<Usertoken>(this.form, [], doc).then((updated: Usertoken) => {
				this._core.copy(updated, doc);

				this._usertokenService.update(doc);
			});
		},
		delete: (doc: Usertoken): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this usertoken?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._usertokenService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Usertoken): void => {
					this._form.modalUnique<Usertoken>('usertoken', 'url', doc);
				}
			}
		]
	};

	get rows(): Usertoken[] {
		return this._usertokenService.usertokens;
	}

	constructor(
		private _translate: TranslateService,
		private _usertokenService: UsertokenService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}
}
