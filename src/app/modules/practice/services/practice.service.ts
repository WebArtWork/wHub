import { Injectable } from '@angular/core';
import { Practice } from '../interfaces/practice.interface';
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
export class PracticeService extends CrudService<Practice> {
	practices: Practice[] = this.getDocs();

	practicesByAuthor: Record<string, Practice[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'practice',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.practicesByAuthor);
	}
}
