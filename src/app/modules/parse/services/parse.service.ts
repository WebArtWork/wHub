import { Injectable } from '@angular/core';
import { Parse } from '../interfaces/parse.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class ParseService extends CrudService<Parse> {
	parses: Parse[] = this.getDocs();

	parsesByAuthor: Record<string, Parse[]> = {};

	constructor() {
		super({
			name: 'parse'
		});

		this.get();

		this.filteredDocuments(this.parsesByAuthor);
	}
}
