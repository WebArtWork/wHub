import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PartnerService } from '../../services/partner.service';
import { Partner } from '../../interfaces/partner.interface';

@Component({
	selector: 'partner-selector',
	templateUrl: './partner-selector.component.html',
	styleUrls: ['./partner-selector.component.scss'],
	imports: [SelectModule],
})
export class PartnerSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Partner[] {
		return this._partnerService.partners;
	}

	constructor(private _partnerService: PartnerService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
