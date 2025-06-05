import { CrudDocument } from 'wacom';

export interface Userskill extends CrudDocument {
	name: string;
	description: string;
}
