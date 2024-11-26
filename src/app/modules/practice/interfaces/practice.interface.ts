import { CrudDocument } from 'wacom';

export interface Practice extends CrudDocument {
	name: string;
	description: string;
}
