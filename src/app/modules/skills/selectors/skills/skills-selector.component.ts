import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { SkillsService } from '../../services/skills.service';
import { Skills } from '../../interfaces/skills.interface';

@Component({
	selector: 'skills-selector',
	templateUrl: './skills-selector.component.html',
	styleUrls: ['./skills-selector.component.scss'],
	imports: [SelectModule],
})
export class SkillsSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Skills[] {
		return this._skillsService.skillss;
	}

	constructor(private _skillsService: SkillsService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
