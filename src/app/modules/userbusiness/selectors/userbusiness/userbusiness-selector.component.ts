import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UserbusinessService } from '../../services/userbusiness.service';
import { Userbusiness } from '../../interfaces/userbusiness.interface';

@Component({
	selector: 'userbusiness-selector',
	templateUrl: './userbusiness-selector.component.html',
	styleUrls: ['./userbusiness-selector.component.scss'],
	imports: [SelectModule],
})
export class UserbusinessSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Userbusiness[] {
		return this._userbusinessService.userbusinesss;
	}

	constructor(private _userbusinessService: UserbusinessService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
