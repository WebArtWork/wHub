import { Injectable } from '@angular/core';
import { Userprofession } from '../interfaces/userprofession.interface';
import { CrudService } from 'wacom';
import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class UserprofessionService extends CrudService<Userprofession> {
	userprofessions: Userprofession[] = this.getDocs();

	userprofessionsByAuthor: Record<string, Userprofession[]> = {};

	constructor() {
		super({
			name: 'userprofession'
		});

		this.get().subscribe(() => {
			const component = environment.userForm.find(
				(c) => c.key === 'professions'
			);

			(component?.fields[3].value as Array<unknown>).push(
				...this.userprofessions
			);
		});

		this.filteredDocuments(this.userprofessionsByAuthor);
	}
}
