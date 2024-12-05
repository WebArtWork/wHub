import { CrudDocument } from 'wacom';

export interface Parsefield extends CrudDocument {
	name: string;
	description: string;
}
