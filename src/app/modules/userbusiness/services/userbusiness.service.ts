import { Injectable } from '@angular/core';
import { Userbusiness } from '../interfaces/userbusiness.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class UserbusinessService extends CrudService<Userbusiness> {
	constructor() {
		super({
			name: 'userbusiness',
		});
	}
}
