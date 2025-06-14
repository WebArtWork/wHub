import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { environment } from 'src/environments/environment';
import { CoreService, CrudComponent, TableConfig } from 'wacom';
import { userbusinessFormComponents } from '../../formcomponents/userbusiness.formcomponents';
import { Userbusiness } from '../../interfaces/userbusiness.interface';
import { UserbusinessService } from '../../services/userbusiness.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './businesses.component.html',
	styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent extends CrudComponent<
	UserbusinessService,
	Userbusiness,
	FormInterface
> {
	columns = ['name', 'description'];

	config: TableConfig<Userbusiness>;

	constructor(
		_userbusinessService: UserbusinessService,
		private _userService: UserService,
		_translate: TranslateService,
		private _core: CoreService,
		private _router: Router,
		_form: FormService
	) {
		super(
			userbusinessFormComponents,
			_form,
			_translate,
			_userbusinessService
		);

		if (this._router.url.includes('all')) {
			this.config = this.getConfig();
		} else {
			this._core.onComplete('us.user').then(() => {
				this._canModify = !!environment.applyRoles.filter((role) => {
					return !!this._userService.user.is[role];
				}).length;

				this.config = this.getConfig();
			});
		}

		this.setDocuments();
	}

	override allowCreate(): boolean {
		return this._canModify;
	}

	override allowMutate(): boolean {
		return this._canModify;
	}

	private _canModify = false;
}
