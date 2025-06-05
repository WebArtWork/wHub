import { Injectable } from '@angular/core';
import { Userprofession } from '../interfaces/userprofession.interface';
import { CrudService } from 'wacom';
import { environment } from 'src/environments/environment.prod';
import { userportfolioFormComponents } from '../../userportfolio/formcomponents/userportfolio.formcomponents';

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
			(
				environment.userForm.find((c) => c.key === 'professions')
					?.fields[3].value as Array<unknown>
			).push(...this.userprofessions);

			(
				userportfolioFormComponents.components.find(
					(c) => c.key === 'professions'
				)?.fields[3].value as Array<unknown>
			).push(...this.userprofessions);
		});

		this.filteredDocuments(this.userprofessionsByAuthor);
	}
}
