import { Injectable } from '@angular/core';
import { Commerce } from '../interfaces/commerce.interface';
import { CoreService, CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class CommerceService extends CrudService<Commerce> {
	commerces: Commerce[] = this.getDocs();

	commercesByAuthor: Record<string, Commerce[]> = {};

	constructor(private _core: CoreService) {
		super({
			name: 'commerce'
		});

		this.get();

		_core.on('wipe').subscribe(this.get.bind(this));

		this.filteredDocuments(this.commercesByAuthor);
	}
}
