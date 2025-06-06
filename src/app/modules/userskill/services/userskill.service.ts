import { Injectable } from '@angular/core';
import { Userskill } from '../interfaces/userskill.interface';
import { CrudService } from 'wacom';
import { environment } from 'src/environments/environment.prod';
import { userportfolioFormComponents } from '../../userportfolio/formcomponents/userportfolio.formcomponents';

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
				environment.userForm.find((c) => c.key === 'skills')?.fields[3]
					.value as Array<unknown>
			).push(...this.userskills);

			(
				userportfolioFormComponents.components.find(
					(c) => c.key === 'skills'
				)?.fields[3].value as Array<unknown>
			).push(...this.userskills);

			console.log(
				environment.userForm.find((c) => c.key === 'skills'),
				this.userskills,
				userportfolioFormComponents.components.find(
					(c) => c.key === 'skills'
				)
			);
		});

		this.filteredDocuments(this.userskillsByAuthor);
	}
}
