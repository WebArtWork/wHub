import { Injectable } from '@angular/core';
import { Usertoken } from '../interfaces/usertoken.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class UsertokenService extends CrudService<Usertoken> {
	usertokens: Usertoken[] = this.getDocs();

	constructor() {
		super({
			name: 'usertoken'
		});

		this.get();
	}
}
