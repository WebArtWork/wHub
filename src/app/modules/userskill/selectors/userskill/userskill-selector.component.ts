import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UserskillService } from '../../services/userskill.service';
import { Userskill } from '../../interfaces/userskill.interface';

@Component({
	selector: 'userskill-selector',
	templateUrl: './userskill-selector.component.html',
	styleUrls: ['./userskill-selector.component.scss'],
	imports: [SelectModule],
})
export class UserskillSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Userskill[] {
		return this._userskillService.userskills;
	}

	constructor(private _userskillService: UserskillService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
