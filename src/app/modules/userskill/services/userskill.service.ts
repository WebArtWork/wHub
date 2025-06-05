import { Injectable } from '@angular/core';
import { Userskill } from '../interfaces/userskill.interface';
import { CrudService } from 'wacom';
import { environment } from 'src/environments/environment.prod';

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
			const component = environment.userForm.find(
				(c) => c.key === 'tools'
			);

			(component?.fields[3].value as Array<unknown>).push(
				...this.userskills
			);
		});

		this.filteredDocuments(this.userskillsByAuthor);
	}
}
