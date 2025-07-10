import { CrudDocument } from 'wacom';

export interface Partner extends CrudDocument {
	name: string;
	description: string;
}
