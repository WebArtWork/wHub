import { Injectable } from '@angular/core';
import { Skills } from '../interfaces/skills.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class SkillsService extends CrudService<Skills> {
	skillss: Skills[] = this.getDocs();

	skillssByAuthor: Record<string, Skills[]> = {};

	constructor() {
		super({
			name: 'skills',
		});

		this.get();

		this.filteredDocuments(this.skillssByAuthor);
	}
}
