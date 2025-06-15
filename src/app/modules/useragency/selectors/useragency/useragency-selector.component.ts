import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UseragencyService } from '../../services/useragency.service';
import { Useragency } from '../../interfaces/useragency.interface';

@Component({
	selector: 'useragency-selector',
	templateUrl: './useragency-selector.component.html',
	styleUrls: ['./useragency-selector.component.scss'],
	imports: [SelectModule],
})
export class UseragencySelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Useragency[] {
		return this._useragencyService.useragencys;
	}

	constructor(private _useragencyService: UseragencyService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
