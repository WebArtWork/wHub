import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { webartworkpartnerFormComponents } from '../../formcomponents/webartworkpartner.formcomponents';
import { Webartworkpartner } from '../../interfaces/webartworkpartner.interface';
import { WebartworkpartnerService } from '../../services/webartworkpartner.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './partners.component.html',
	styleUrls: ['./partners.component.scss']
})
export class PartnersComponent extends CrudComponent<
	WebartworkpartnerService,
	Webartworkpartner,
	FormInterface
> {
	override updatableFields = [
		'_id',
		'name',
		'description',
		'thumb',
		'ourrole',
		'website',
		'android',
		'ios',
		'instagram',
		'facebook',
		'linkedIn',
		'place',
		'placeName',
		'placethumb',
		'order',
		'born',
		'employees',
		'projects',
		'phone',
		'email',
		'data'
	];

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_webartworkpartnerService: WebartworkpartnerService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			webartworkpartnerFormComponents,
			_form,
			_translate,
			_webartworkpartnerService,
			'Webartworkpartner'
		);

		this.setDocuments();
	}
}
