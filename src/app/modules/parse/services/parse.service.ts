import { Injectable } from '@angular/core';
import { Parse } from '../interfaces/parse.interface';
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
export class ParseService extends CrudService<Parse> {
	parses: Parse[] = this.getDocs();

	parsesByAuthor: Record<string, Parse[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'parse',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.parsesByAuthor);
	}
}
