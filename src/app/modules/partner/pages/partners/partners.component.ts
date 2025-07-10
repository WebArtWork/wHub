import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { partnerFormComponents } from '../../formcomponents/partner.formcomponents';
import { Partner } from '../../interfaces/partner.interface';
import { PartnerService } from '../../services/partner.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './partners.component.html',
	styleUrls: ['./partners.component.scss']
})
export class PartnersComponent extends CrudComponent<
	PartnerService,
	Partner,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	protected override allowUrl(): boolean {
		return false;
	}

	protected override allowSort(): boolean {
		return true;
	}

	constructor(
		_partnerService: PartnerService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			partnerFormComponents,
			_form,
			_translate,
			_partnerService,
			'Partner'
		);

		this.setDocuments();
	}
}
