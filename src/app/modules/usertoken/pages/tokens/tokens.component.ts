import { Component } from '@angular/core';
import { AlertService } from 'wacom';
import { UsertokenService } from '../../services/usertoken.service';
import { Usertoken } from '../../interfaces/usertoken.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { usertokenFormComponents } from '../../formcomponents/usertoken.formcomponents';

@Component({
	templateUrl: './tokens.component.html',
	styleUrls: ['./tokens.component.scss'],
	standalone: false
})
export class TokensComponent {
	columns = ['token', 'created'];

	form: FormInterface = this._form.prepareForm(usertokenFormComponents);

	config = {
		create: (): void => {
			this._usertokenService.create({} as Usertoken);
		},
		delete: (doc: Usertoken): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this token?'
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
				icon: 'content_copy',
				click: (doc: Usertoken): void => {
					navigator.clipboard.writeText(doc._id).then(
						() => {
							this._alert.show({
								text: this._translate.translate(
									'Common.Text copied to clipboard'
								)
							});
						},
						() => {
							this._alert.error({
								text: this._translate.translate(
									'Common.Failed to copy text'
								)
							});
						}
					);
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
		private _form: FormService
	) {}
}
