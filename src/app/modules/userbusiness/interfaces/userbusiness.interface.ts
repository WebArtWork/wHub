import { CrudDocument } from 'wacom';

export interface Userbusiness extends CrudDocument {
	name: string;
	description: string;
}
