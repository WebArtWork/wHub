import { Component } from '@angular/core';
import { UsertoolService } from 'src/app/modules/usertool/services/usertool.service';
import { UserskillService } from 'src/app/modules/userskill/services/userskill.service';
import { UserprofessionService } from 'src/app/modules/userprofession/services/userprofession.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: false
})
export class AppComponent {
	constructor(
		_toolService: UsertoolService, // just to make sure form is filled
		_skillService: UserskillService, // just to make sure form is filled
		_professionService: UserprofessionService // just to make sure form is filled
	) {}
}
