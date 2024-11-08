import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UsertokenService } from '../../services/usertoken.service';
import { Usertoken } from '../../interfaces/usertoken.interface';

@Component({
	selector: 'usertoken-selector',
	templateUrl: './usertoken-selector.component.html',
	styleUrls: ['./usertoken-selector.component.scss'],
	standalone: true,
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Usertoken[] {
		return this._usertokenService.usertokens;
	}

	constructor(private _usertokenService: UsertokenService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
