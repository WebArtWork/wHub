import { Injectable } from '@angular/core';
import { CrudService } from 'wacom';
import { userFormComponents } from '../../user/formcomponents/user.formcomponents';
import { userportfolioFormComponents } from '../../userportfolio/formcomponents/userportfolio.formcomponents';
import { Usertool } from '../interfaces/usertool.interface';

@Injectable({
	providedIn: 'root'
})
export class UsertoolService extends CrudService<Usertool> {
	usertools: Usertool[] = this.getDocs();

	usertoolsByAuthor: Record<string, Usertool[]> = {};

	constructor() {
		super({
			name: 'usertool'
		});

		this.get().subscribe(() => {
			(
				userFormComponents.components.find((c) => c.key === 'tools')
					?.fields?.[3].value as Array<unknown>
			).push(...this.usertools);

			(
				userportfolioFormComponents.components.find(
					(c) => c.key === 'tools'
				)?.fields[3].value as Array<unknown>
			).push(...this.usertools);
		});

		this.filteredDocuments(this.usertoolsByAuthor);
	}
}
