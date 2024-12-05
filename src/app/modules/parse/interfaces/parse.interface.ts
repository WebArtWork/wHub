import { CrudDocument } from 'wacom';

export interface Parse extends CrudDocument {
	name: string;
	description: string;
}
