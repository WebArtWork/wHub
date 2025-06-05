import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UserprofessionService } from '../../services/userprofession.service';
import { Userprofession } from '../../interfaces/userprofession.interface';

@Component({
	selector: 'userprofession-selector',
	templateUrl: './userprofession-selector.component.html',
	styleUrls: ['./userprofession-selector.component.scss'],
	imports: [SelectModule],
})
export class UserprofessionSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Userprofession[] {
		return this._userprofessionService.userprofessions;
	}

	constructor(private _userprofessionService: UserprofessionService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
