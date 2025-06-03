import { Injectable } from '@angular/core';
import { Commerceproduct } from '../interfaces/commerceproduct.interface';
import { CoreService, CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class CommerceproductService extends CrudService<Commerceproduct> {
	commerceproducts: Commerceproduct[] = this.getDocs();

	commerceproductsByCommerce: Record<string, Commerceproduct[]> = {};

	constructor(private _core: CoreService) {
		super({
			name: 'commerceproduct'
		});

		this.get();

		this._core.on('wipe').subscribe(this.get.bind(this));

		this.filteredDocuments(this.commerceproductsByCommerce, 'commerce');
	}
}
