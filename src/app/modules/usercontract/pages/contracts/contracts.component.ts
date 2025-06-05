import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercontractService } from '../../services/usercontract.service';
import { Usercontract } from '../../interfaces/usercontract.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { usercontractFormComponents } from '../../formcomponents/usercontract.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './contracts.component.html',
	styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent extends CrudComponent<
	UsercontractService,
	Usercontract,
	FormInterface
> {
	columns = ['name', 'status'];

	config = this.getConfig();

	constructor(
		_usercontractService: UsercontractService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			usercontractFormComponents,
			_form,
			_translate,
			_usercontractService
		);

		this.setDocuments();
	}

	override allowCreate(): boolean {
		return false;
	}

	override allowMutate(): boolean {
		return false;
	}
}
