import { Injectable } from '@angular/core';
import { Practice } from '../interfaces/practice.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class PracticeService extends CrudService<Practice> {
	practices: Practice[] = this.getDocs();

	practicesByAuthor: Record<string, Practice[]> = {};

	constructor() {
		super({
			name: 'practice'
		});

		this.get();

		this.filteredDocuments(this.practicesByAuthor);
	}
}
