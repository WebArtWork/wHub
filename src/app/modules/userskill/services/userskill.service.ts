import { Injectable } from '@angular/core';
import { Userskill } from '../interfaces/userskill.interface';
import { CrudService } from 'wacom';

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

		this.get();

		this.filteredDocuments(this.userskillsByAuthor);
	}
}
