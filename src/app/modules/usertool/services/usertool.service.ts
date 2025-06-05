import { Injectable } from '@angular/core';
import { Usertool } from '../interfaces/usertool.interface';
import { CrudService } from 'wacom';
import { environment } from 'src/environments/environment';
import { userportfolioFormComponents } from '../../userportfolio/formcomponents/userportfolio.formcomponents';

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
				environment.userForm.find((c) => c.key === 'skills')?.fields[3]
					.value as Array<unknown>
			).push(...this.usertools);

			(
				userportfolioFormComponents.components.find(
					(c) => c.key === 'skills'
				)?.fields[3].value as Array<unknown>
			).push(...this.usertools);
		});

		this.filteredDocuments(this.usertoolsByAuthor);
	}
}
