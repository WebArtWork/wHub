import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { userFormComponents } from 'src/app/modules/user/formcomponents/user.formcomponents';
import { User } from 'src/app/modules/user/interfaces/user.interface';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent extends CrudComponent<
	UserService,
	User,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_userService: UserService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(userFormComponents, _form, _translate, _userService);

		this.setDocuments();
	}
}
