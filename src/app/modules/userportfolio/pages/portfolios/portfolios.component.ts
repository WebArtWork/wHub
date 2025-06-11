import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { userportfolioFormComponents } from '../../formcomponents/userportfolio.formcomponents';
import { Userportfolio } from '../../interfaces/userportfolio.interface';
import { UserportfolioService } from '../../services/userportfolio.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './portfolios.component.html',
	styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent extends CrudComponent<
	UserportfolioService,
	Userportfolio,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_userportfolioService: UserportfolioService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			userportfolioFormComponents,
			_form,
			_translate,
			_userportfolioService
		);

		this.setDocuments();
	}

	override updatableFields = [
		'_id',
		'thumb',
		'thumbs',
		'name',
		'description',
		'languages',
		'professions',
		'tools',
		'skills',
		'data'
	];
}
