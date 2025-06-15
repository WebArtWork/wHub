import { CrudDocument } from 'wacom';

export interface Useragency extends CrudDocument {
	name: string;
	description: string;
}
