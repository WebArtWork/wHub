import { Injectable } from '@angular/core';
import { Usertool } from '../interfaces/usertool.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class UsertoolService extends CrudService<Usertool> {
	usertools: Usertool[] = this.getDocs();

	usertoolsByAuthor: Record<string, Usertool[]> = {};

	constructor() {
		super({
			name: 'usertool',
		});

		this.get();

		this.filteredDocuments(this.usertoolsByAuthor);
	}
}
