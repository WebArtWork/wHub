import { Injectable } from '@angular/core';
import { Usertoken } from '../interfaces/usertoken.interface';
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
export class UsertokenService extends CrudService<Usertoken> {
	usertokens: Usertoken[] = this.getDocs();

	usertokensByAuthor: Record<string, Usertoken[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'usertoken',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.usertokensByAuthor);
	}
}
