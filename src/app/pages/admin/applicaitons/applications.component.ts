import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { User } from 'src/app/modules/user/interfaces/user.interface';
import { UserService } from 'src/app/modules/user/services/user.service';
import { environment } from 'src/environments/environment';
import { AlertService, CrudComponent, CrudOptions } from 'wacom';

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
	readonly applyRoles = environment.applyRoles;

	columns = ['name', 'email', ...this.applyRoles];

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
			...this.applyRoles.map((role) => {
				return {
					icon: this._iconForRole[role],
					click: (user: User) => {
						this._alert.question({
							text: this._translate.translate(
								`Common.Are you sure you want to toggle ${role} role?`
							),
							buttons: [
								{
									text: this._translate.translate('Common.No')
								},
								{
									text: this._translate.translate(
										'Common.Yes'
									),
									callback: (): void => {
										user.is[role] = !user.is[role];

										this._userService.updateAdmin(user);
									}
								}
							]
						});
					}
				};
			})
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

	private _iconForRole: Record<string, string> = {
		Influencer: 'record_voice_over',
		Entrepreneur: 'lightbulb',
		Investor: 'trending_up',
		Freelancer: 'work_outline'
	};
}
