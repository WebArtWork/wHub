import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { useragencyFormComponents } from '../../formcomponents/useragency.formcomponents';
import { Useragency } from '../../interfaces/useragency.interface';
import { UseragencyService } from '../../services/useragency.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './agencies.component.html',
	styleUrls: ['./agencies.component.scss'],
})
export class AgenciesComponent extends CrudComponent<
	UseragencyService,
	Useragency,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_useragencyService: UseragencyService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(useragencyFormComponents, _form, _translate, _useragencyService, 'useragency');

		this.setDocuments();
	}
}
