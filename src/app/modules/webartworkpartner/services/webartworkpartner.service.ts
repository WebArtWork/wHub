import { Injectable } from '@angular/core';
import { Webartworkpartner } from '../interfaces/webartworkpartner.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class WebartworkpartnerService extends CrudService<Webartworkpartner> {
	constructor() {
		super({
			name: 'webartworkpartner',
		});
	}
}
