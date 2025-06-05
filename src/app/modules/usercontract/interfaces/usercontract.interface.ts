import { CrudDocument } from 'wacom';

export interface Usercontract extends CrudDocument {
	name: string;
	description: string;
}
