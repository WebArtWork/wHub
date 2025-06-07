import { CrudDocument } from 'wacom';

export interface Skills extends CrudDocument {
	name: string;
	description: string;
}
