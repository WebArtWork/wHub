import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UsercontractService } from '../../services/usercontract.service';
import { Usercontract } from '../../interfaces/usercontract.interface';

@Component({
	selector: 'usercontract-selector',
	templateUrl: './usercontract-selector.component.html',
	styleUrls: ['./usercontract-selector.component.scss'],
	imports: [SelectModule],
})
export class UsercontractSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Usercontract[] {
		return this._usercontractService.usercontracts;
	}

	constructor(private _usercontractService: UsercontractService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
