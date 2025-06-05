import { CrudDocument } from 'wacom';

export interface Usertool extends CrudDocument {
	name: string;
	description: string;
}
