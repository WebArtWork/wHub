import { Injectable } from '@angular/core';
import { Uafpvacademyunit } from '../interfaces/uafpvacademyunit.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class UafpvacademyunitService extends CrudService<Uafpvacademyunit> {
	constructor() {
		super({
			name: 'uafpvacademyunit',
		});
	}
}
