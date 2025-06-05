import { Injectable } from '@angular/core';
import { Userportfolio } from '../interfaces/userportfolio.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class UserportfolioService extends CrudService<Userportfolio> {
	constructor() {
		super({
			name: 'userportfolio',
		});
	}
}
