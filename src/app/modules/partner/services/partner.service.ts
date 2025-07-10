import { Injectable } from '@angular/core';
import { Partner } from '../interfaces/partner.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class PartnerService extends CrudService<Partner> {
	partners: Partner[] = this.getDocs();

	partnersByAuthor: Record<string, Partner[]> = {};

	constructor() {
		super({
			name: 'partner',
		});

		this.get();

		this.filteredDocuments(this.partnersByAuthor);
	}
}
