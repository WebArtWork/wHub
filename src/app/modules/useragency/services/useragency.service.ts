import { Injectable } from '@angular/core';
import { Useragency } from '../interfaces/useragency.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class UseragencyService extends CrudService<Useragency> {
	useragencys: Useragency[] = this.getDocs();

	useragencysByAuthor: Record<string, Useragency[]> = {};

	constructor() {
		super({
			name: 'useragency',
		});

		this.get();

		this.filteredDocuments(this.useragencysByAuthor);
	}
}
