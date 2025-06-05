import { CrudDocument } from 'wacom';

export interface Userportfolio extends CrudDocument {
	name: string;
	description: string;
}
