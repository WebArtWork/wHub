import { Injectable } from '@angular/core';
import { CrudService } from 'wacom';
import { userFormComponents } from '../../user/formcomponents/user.formcomponents';
import { userportfolioFormComponents } from '../../userportfolio/formcomponents/userportfolio.formcomponents';
import { Userprofession } from '../interfaces/userprofession.interface';

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
				userFormComponents.components.find((c) => c.key === 'professions')
					?.fields?.[3].value as Array<unknown>
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
