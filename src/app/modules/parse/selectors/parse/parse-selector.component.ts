import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { ParseService } from '../../services/parse.service';
import { Parse } from '../../interfaces/parse.interface';

@Component({
	selector: 'parse-selector',
	templateUrl: './parse-selector.component.html',
	styleUrls: ['./parse-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Parse[] {
		return this._parseService.parses;
	}

	constructor(private _parseService: ParseService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
