import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { userFormComponents } from 'src/app/modules/user/formcomponents/user.formcomponents';
import { UserService } from 'src/app/modules/user/services/user.service';
import { environment } from 'src/environments/environment';
import { CoreService } from 'wacom';

interface ChangePassword {
	oldPass: string;
	newPass: string;
}

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	standalone: false
})
export class ProfileComponent {
	readonly url = environment.url;

	constructor(
		private _form: FormService,
		private _core: CoreService,
		public us: UserService
	) {
		this._core
			.onComplete([
				'us.user',
				'usertool_loaded',
				'userskill_loaded',
				'userprofession_loaded'
			])
			.then(() => {
				const user = {};

				this._core.copy(this.us.user, user);

				this.formProfile = this._form.prepareForm(userFormComponents);

				this.user = user;
			});
	}

	// Update user profile
	formProfile: FormInterface;

	user: Record<string, unknown>;

	update(): void {
		this._core.copy(this.user, this.us.user);

		this.us.updateMe();
	}

	// Update user password
	formPassword: FormInterface = this._form.prepareForm({
		formId: 'change password',
		title: 'Change password',
		components: [
			{
				name: 'Password',
				key: 'oldPass',
				focused: true,
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your old password'
					},
					{
						name: 'Label',
						value: 'Old Password'
					}
				]
			},
			{
				name: 'Password',
				key: 'newPass',
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your new password'
					},
					{
						name: 'Label',
						value: 'New Password'
					}
				]
			}
		]
	});

	// Update user password
	formApplication: FormInterface = this._form.prepareForm({
		formId: 'userApplication',
		title: 'Apply for role',
		components: [
			...environment.applyRoles.map((position) => {
				return {
					name: 'Boolean',
					key: 'data.apply' + position,
					fields: [
						{
							name: 'Label',
							value: 'Apply for ' + position
						}
					]
				};
			})
		]
	});

	apply(): void {
		this._form.modal<ChangePassword>(
			this.formApplication,
			{
				label: 'Change',
				click: (submition: unknown, close: () => void) => {
					console.log(submition);
					close();

					this.us.updateMe();
				}
			},
			this.us.user
		);
	}

	changePassword(): void {
		this._form
			.modal<ChangePassword>(this.formPassword, {
				label: 'Change',
				click: (submition: unknown, close: () => void) => {
					this.us.changePassword(
						(submition as ChangePassword).oldPass,
						(submition as ChangePassword).newPass
					);

					close();
				}
			})
			.then((submition: ChangePassword) => {
				this.us.changePassword(submition.oldPass, submition.newPass);
			});
	}

	updateThumb(thumb: string | string[]): void {
		this.us.user.thumb = Array.isArray(thumb) ? thumb[0] : thumb;

		this.us.updateMe();
	}
}
