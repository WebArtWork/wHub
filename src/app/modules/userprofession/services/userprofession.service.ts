import { Injectable } from '@angular/core';
import { Userprofession } from '../interfaces/userprofession.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class UserprofessionService extends CrudService<Userprofession> {
	userprofessions: Userprofession[] = this.getDocs();

	userprofessionsByAuthor: Record<string, Userprofession[]> = {};

	constructor() {
		super({
			name: 'userprofession',
		});

		this.get();

		this.filteredDocuments(this.userprofessionsByAuthor);
	}
}
