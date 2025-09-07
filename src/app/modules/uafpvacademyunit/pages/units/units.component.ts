import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { uafpvacademyunitFormComponents } from '../../formcomponents/uafpvacademyunit.formcomponents';
import { Uafpvacademyunit } from '../../interfaces/uafpvacademyunit.interface';
import { UafpvacademyunitService } from '../../services/uafpvacademyunit.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './units.component.html',
	styleUrls: ['./units.component.scss']
})
export class UnitsComponent extends CrudComponent<
	UafpvacademyunitService,
	Uafpvacademyunit,
	FormInterface
> {
	columns = ['name'];

	config = this.getConfig();

	override updatableFields = [
		'_id',
		'name',
		'description',
		'data',
		'range',
		'accuracy',
		'firepower',
		'rateOfFire',
		'mobility',
		'stealth',
		'defenseResistance',
		'versatility',
		'autonomy',
		'endurance',
		'payload',
		'survivability',
		'logistics',
		'electronicWarfareResistance',
		'precisionStrike',
		'reconnaissance',
		'psychologicalEffect',
		'originCountry',
		'yearOfCreation',
		'activeCountries',
		'manufacturer',
		'conflictUsage',
		'status',
		'unitCost',
		'productionQuantity'
	];

	constructor(
		_uafpvacademyunitService: UafpvacademyunitService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			uafpvacademyunitFormComponents,
			_form,
			_translate,
			_uafpvacademyunitService,
			'Uafpvacademyunit'
		);

		this.setDocuments();
	}
}
