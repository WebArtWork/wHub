import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertoolService } from '../../services/usertool.service';
import { Usertool } from '../../interfaces/usertool.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { usertoolFormComponents } from '../../formcomponents/usertool.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './tools.component.html',
	styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent extends CrudComponent<
	UsertoolService,
	Usertool,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_usertoolService: UsertoolService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(usertoolFormComponents, _form, _translate, _usertoolService);

		this.setDocuments();
	}

	override configType: 'local' | 'server' = 'local';
}
