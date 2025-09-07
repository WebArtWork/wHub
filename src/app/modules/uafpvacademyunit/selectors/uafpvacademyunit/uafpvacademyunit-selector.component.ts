import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UafpvacademyunitService } from '../../services/uafpvacademyunit.service';
import { Uafpvacademyunit } from '../../interfaces/uafpvacademyunit.interface';

@Component({
	selector: 'uafpvacademyunit-selector',
	templateUrl: './uafpvacademyunit-selector.component.html',
	styleUrls: ['./uafpvacademyunit-selector.component.scss'],
	imports: [SelectModule],
})
export class UafpvacademyunitSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Uafpvacademyunit[] {
		return this._uafpvacademyunitService.uafpvacademyunits;
	}

	constructor(private _uafpvacademyunitService: UafpvacademyunitService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
