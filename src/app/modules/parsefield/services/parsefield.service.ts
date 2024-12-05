import { Injectable } from '@angular/core';
import { Parsefield } from '../interfaces/parsefield.interface';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService
} from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class ParsefieldService extends CrudService<Parsefield> {
	parsefields: Parsefield[] = this.getDocs();

	parsefieldsByAuthor: Record<string, Parsefield[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'parsefield',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.parsefieldsByAuthor);
	}
}
