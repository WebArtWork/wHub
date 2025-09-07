import { Component, inject, output } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
@Component({
	selector: 'core-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
	standalone: false
})
export class TopbarComponent {
	navigated = output();

	userService = inject(UserService);
}
