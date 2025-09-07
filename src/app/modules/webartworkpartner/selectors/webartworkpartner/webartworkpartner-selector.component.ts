import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { WebartworkpartnerService } from '../../services/webartworkpartner.service';
import { Webartworkpartner } from '../../interfaces/webartworkpartner.interface';

@Component({
	selector: 'webartworkpartner-selector',
	templateUrl: './webartworkpartner-selector.component.html',
	styleUrls: ['./webartworkpartner-selector.component.scss'],
	imports: [SelectModule],
})
export class WebartworkpartnerSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Webartworkpartner[] {
		return this._webartworkpartnerService.webartworkpartners;
	}

	constructor(private _webartworkpartnerService: WebartworkpartnerService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
