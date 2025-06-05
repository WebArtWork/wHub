import { CrudDocument } from 'wacom';

export interface Userprofession extends CrudDocument {
	name: string;
	description: string;
}
