import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UsertoolService } from '../../services/usertool.service';
import { Usertool } from '../../interfaces/usertool.interface';

@Component({
	selector: 'usertool-selector',
	templateUrl: './usertool-selector.component.html',
	styleUrls: ['./usertool-selector.component.scss'],
	imports: [SelectModule],
})
export class UsertoolSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Usertool[] {
		return this._usertoolService.usertools;
	}

	constructor(private _usertoolService: UsertoolService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
