import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofessionService } from '../../services/userprofession.service';
import { Userprofession } from '../../interfaces/userprofession.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { userprofessionFormComponents } from '../../formcomponents/userprofession.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './professions.component.html',
	styleUrls: ['./professions.component.scss'],
})
export class ProfessionsComponent extends CrudComponent<
	UserprofessionService,
	Userprofession,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_userprofessionService: UserprofessionService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(userprofessionFormComponents, _form, _translate, _userprofessionService);

		this.setDocuments();
	}

	override configType: 'local' | 'server' = 'local';
}
