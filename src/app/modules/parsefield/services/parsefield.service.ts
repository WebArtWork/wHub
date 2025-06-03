import { Injectable } from '@angular/core';
import { Parsefield } from '../interfaces/parsefield.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class ParsefieldService extends CrudService<Parsefield> {
	parsefields: Parsefield[] = this.getDocs();

	parsefieldsByAuthor: Record<string, Parsefield[]> = {};

	constructor() {
		super({
			name: 'parsefield'
		});

		this.get();

		this.filteredDocuments(this.parsefieldsByAuthor);
	}
}
