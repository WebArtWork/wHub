import { Injectable } from '@angular/core';
import { Usercontract } from '../interfaces/usercontract.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class UsercontractService extends CrudService<Usercontract> {
	constructor() {
		super({
			name: 'usercontract',
		});
	}
}
