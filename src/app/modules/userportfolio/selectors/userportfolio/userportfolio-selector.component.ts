import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { UserportfolioService } from '../../services/userportfolio.service';
import { Userportfolio } from '../../interfaces/userportfolio.interface';

@Component({
	selector: 'userportfolio-selector',
	templateUrl: './userportfolio-selector.component.html',
	styleUrls: ['./userportfolio-selector.component.scss'],
	imports: [SelectModule],
})
export class UserportfolioSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Userportfolio[] {
		return this._userportfolioService.userportfolios;
	}

	constructor(private _userportfolioService: UserportfolioService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
