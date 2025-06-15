import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { userbusinessFormComponents } from '../../formcomponents/userbusiness.formcomponents';
import { Userbusiness } from '../../interfaces/userbusiness.interface';
import { UserbusinessService } from '../../services/userbusiness.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './businesses.component.html',
	styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent extends CrudComponent<
	UserbusinessService,
	Userbusiness,
	FormInterface
> {
	columns = ['name'];

	config = this.getConfig();

	constructor(
		_userbusinessService: UserbusinessService,
		_translate: TranslateService,
		private _router: Router,
		_form: FormService
	) {
		super(
			userbusinessFormComponents,
			_form,
			_translate,
			_userbusinessService,
			'business'
		);

		this.config.buttons.push({
			icon: 'visibility',
			hrefFunc: (business: Userbusiness) => {
				return '/business/' + business._id;
			}
		});

		this.setDocuments();
	}

	override allowCreate(): boolean {
		return this._router.url.includes('admin');
	}

	override allowMutate(): boolean {
		return this._router.url.includes('admin');
	}

	override allowUrl(): boolean {
		return this._router.url.includes('admin');
	}
}
