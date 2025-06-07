import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserskillService } from '../../services/userskill.service';
import { Userskill } from '../../interfaces/userskill.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { userskillFormComponents } from '../../formcomponents/userskill.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends CrudComponent<
	UserskillService,
	Userskill,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_userskillService: UserskillService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(userskillFormComponents, _form, _translate, _userskillService);

		this.setDocuments();
	}

	override configType: 'local' | 'server' = 'local';
}
