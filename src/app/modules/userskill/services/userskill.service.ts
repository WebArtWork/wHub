import { Injectable } from '@angular/core';
import { CrudService } from 'wacom';
import { userFormComponents } from '../../user/formcomponents/user.formcomponents';
import { userportfolioFormComponents } from '../../userportfolio/formcomponents/userportfolio.formcomponents';
import { Userskill } from '../interfaces/userskill.interface';

@Injectable({
	providedIn: 'root'
})
export class UserskillService extends CrudService<Userskill> {
	userskills: Userskill[] = this.getDocs();

	userskillsByAuthor: Record<string, Userskill[]> = {};

	constructor() {
		super({
			name: 'userskill'
		});

		this.get().subscribe(() => {
			(
				userFormComponents.components.find((c) => c.key === 'skills')
					?.fields?.[3].value as Array<unknown>
			).push(...this.userskills);

			(
				userportfolioFormComponents.components.find(
					(c) => c.key === 'skills'
				)?.fields[3].value as Array<unknown>
			).push(...this.userskills);
		});

		this.filteredDocuments(this.userskillsByAuthor);
	}
}
