import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { AlertService, CrudComponent, CrudOptions } from 'wacom';
import { UserService } from 'src/app/modules/user/services/user.service';
import { User } from 'src/app/modules/user/interfaces/user.interface';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './applications.component.html',
	styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent extends CrudComponent<
	UserService,
	User,
	FormInterface
> {
	columns = ['name', 'email', 'developer', 'designer', 'agent'];

	config = this.getConfig();

	constructor(
		__userService: UserService,
		__translate: TranslateService,
		__form: FormService,
		private _alert: AlertService,
		private _userService: UserService,
		private _translate: TranslateService
	) {
		super({}, __form, __translate, __userService);

		this.setDocuments();

		this.config.buttons.push(
			{
				icon: 'code',
				click: (user: User) => {
					this._alert.question({
						text: this._translate.translate(
							'Common.Are you sure you want to toggle user developer role?'
						),
						buttons: [
							{
								text: this._translate.translate('Common.No')
							},
							{
								text: this._translate.translate('Common.Yes'),
								callback: (): void => {
									user.is['developer'] =
										!user.is['developer'];

									this._userService.updateAdmin(user);
								}
							}
						]
					});
				}
			},
			{
				icon: 'brush',
				click: (user: User) => {
					this._alert.question({
						text: this._translate.translate(
							'Common.Are you sure you want to toggle user designer role?'
						),
						buttons: [
							{
								text: this._translate.translate('Common.No')
							},
							{
								text: this._translate.translate('Common.Yes'),
								callback: (): void => {
									user.is['designer'] = !user.is['designer'];

									this._userService.updateAdmin(user);
								}
							}
						]
					});
				}
			},
			{
				icon: 'support_agent',
				click: (user: User) => {
					this._alert.question({
						text: this._translate.translate(
							'Common.Are you sure you want to toggle user agent role?'
						),
						buttons: [
							{
								text: this._translate.translate('Common.No')
							},
							{
								text: this._translate.translate('Common.Yes'),
								callback: (): void => {
									user.is['agent'] = !user.is['agent'];

									this._userService.updateAdmin(user);
								}
							}
						]
					});
				}
			},
			{
				icon: 'delete',
				click: (user: User) => {
					this._alert.question({
						text: this._translate.translate(
							'Common.Are you sure you want to reject this user?'
						),
						buttons: [
							{
								text: this._translate.translate('Common.No')
							},
							{
								text: this._translate.translate('Common.Yes'),
								callback: (): void => {
									console.log(user);
								}
							}
						]
					});
				}
			}
		);
	}

	override allowCreate(): boolean {
		return false;
	}

	override allowMutate(): boolean {
		return false;
	}

	override allowUrl(): boolean {
		return false;
	}

	override getOptions(): CrudOptions<User> {
		return {
			name: 'application'
		} as CrudOptions<User>;
	}
}
