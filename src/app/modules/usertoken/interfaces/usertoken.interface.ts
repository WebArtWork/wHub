import { CrudDocument } from 'wacom';

export interface Usertoken extends CrudDocument {
	name: string;
	description: string;
}
