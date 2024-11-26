import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PracticeService } from '../../services/practice.service';
import { Practice } from '../../interfaces/practice.interface';

@Component({
	selector: 'practice-selector',
	templateUrl: './practice-selector.component.html',
	styleUrls: ['./practice-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Practice[] {
		return this._practiceService.practices;
	}

	constructor(private _practiceService: PracticeService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
