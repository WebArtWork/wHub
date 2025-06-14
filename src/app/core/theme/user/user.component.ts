import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { environment } from 'src/environments/environment';
import { coreAnimation } from '../../animations/core.animations';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	animations: [coreAnimation],
	standalone: false
})
export class UserComponent {
	readonly url = environment.url;

	readonly applyRoles = environment.applyRoles;

	iconForRole: Record<string, string> = {
		Influencer: 'record_voice_over',
		Entrepreneur: 'lightbulb',
		Investor: 'trending_up',
		Freelancer: 'work_outline'
	};

	forceAvatarUrl = '';

	showSidebar = false;

	hideSidebar(): void {
		if (!this._platform.ANDROID && !this._platform.IOS) {
			this.showSidebar = false;
		}
	}

	constructor(public us: UserService, private _platform: Platform) {}
}
