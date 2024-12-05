import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { ParsefieldService } from '../../services/parsefield.service';
import { Parsefield } from '../../interfaces/parsefield.interface';

@Component({
	selector: 'parsefield-selector',
	templateUrl: './parsefield-selector.component.html',
	styleUrls: ['./parsefield-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Parsefield[] {
		return this._parsefieldService.parsefields;
	}

	constructor(private _parsefieldService: ParsefieldService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
