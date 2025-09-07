import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/app/core/core.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './core/theme/guest/guest.component';
import { UserComponent } from './core/theme/user/user.component';
// config
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MetaGuard, WacomModule } from 'wacom';
import { AdminsGuard } from './core/guards/admins.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { UafpvacademyComponent } from './core/theme/uafpvacademy/uafpvacademy.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/sign',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UafpvacademyComponent,
		children: [
			/* user */
			{
				path: 'units',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Units'
					}
				},
				loadChildren: () =>
					import(
						'./modules/uafpvacademyunit/pages/units/units.routes'
					).then((r) => r.unitsRoutes)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'agencies',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Agencies'
					}
				},
				loadChildren: () =>
					import(
						'./modules/useragency/pages/agencies/agencies.routes'
					).then((r) => r.agenciesRoutes)
			},
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./pages/user/users/users.routes').then(
						(r) => r.usersRoutes
					)
			},
			{
				path: 'businesses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Businesses'
					}
				},
				loadChildren: () =>
					import(
						'./modules/userbusiness/pages/businesses/businesses.routes'
					).then((r) => r.businessesRoutes)
			},
			{
				path: 'user',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'User'
					}
				},
				loadChildren: () =>
					import('./pages/user/user/user.module').then(
						(m) => m.UserModule
					)
			},
			{
				path: 'business',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Business'
					}
				},
				loadChildren: () =>
					import('./pages/user/business/business.module').then(
						(m) => m.BusinessModule
					)
			},
			{
				path: 'contracts',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Contracts'
					}
				},
				loadChildren: () =>
					import(
						'./modules/usercontract/pages/contracts/contracts.routes'
					).then((r) => r.contractsRoutes)
			},
			{
				path: 'portfolios',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Portfolios'
					}
				},
				loadChildren: () =>
					import(
						'./modules/userportfolio/pages/portfolios/portfolios.routes'
					).then((r) => r.portfoliosRoutes)
			},
			{
				path: 'fields',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Fields'
					}
				},
				loadChildren: () =>
					import(
						'./modules/parsefield/pages/fields/fields.module'
					).then((m) => m.FieldsModule)
			},
			{
				path: 'parses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Parses'
					}
				},
				loadChildren: () =>
					import('./modules/parse/pages/parses/parses.module').then(
						(m) => m.ParsesModule
					)
			},
			{
				path: 'commerces',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Commerces'
					}
				},
				loadChildren: () =>
					import(
						'./modules/commerce/pages/commerces/commerces.module'
					).then((m) => m.CommerceModule)
			},
			{
				path: 'products',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Products'
					}
				},
				loadChildren: () =>
					import(
						'./modules/commerceproduct/pages/products/products.module'
					).then((m) => m.CommerceproductModule)
			},
			{
				path: 'tokens',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Tokens'
					}
				},
				loadChildren: () =>
					import(
						'./modules/usertoken/pages/tokens/tokens.module'
					).then((m) => m.UsertokenModule)
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'partners',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Partners'
					}
				},
				loadChildren: () =>
					import(
						'./modules/partner/pages/partners/partners.routes'
					).then((r) => r.partnersRoutes)
			},
			{
				path: 'agencies',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Agencies'
					}
				},
				loadChildren: () =>
					import(
						'./modules/useragency/pages/agencies/agencies.routes'
					).then((r) => r.agenciesRoutes)
			},
			{
				path: 'businesses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Businesses'
					}
				},
				loadChildren: () =>
					import(
						'./modules/userbusiness/pages/businesses/businesses.routes'
					).then((r) => r.businessesRoutes)
			},
			{
				path: 'skills',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Skills'
					}
				},
				loadChildren: () =>
					import(
						'./modules/userskill/pages/skills/skills.routes'
					).then((r) => r.skillsRoutes)
			},
			{
				path: 'professions',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Professions'
					}
				},
				loadChildren: () =>
					import(
						'./modules/userprofession/pages/professions/professions.routes'
					).then((m) => m.professionsRoutes)
			},
			{
				path: 'tools',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Tools'
					}
				},
				loadChildren: () =>
					import('./modules/usertool/pages/tools/tools.routes').then(
						(m) => m.toolsRoutes
					)
			},
			{
				path: 'applicaitons',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Applicaitons'
					}
				},
				loadChildren: () =>
					import(
						'./pages/admin/applicaitons/applications.routes'
					).then((r) => r.applicationsRoutes)
			},
			{
				path: 'interns',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Interns'
					}
				},
				loadChildren: () =>
					import(
						'./modules/practice/pages/interns/interns.module'
					).then((m) => m.InternsModule)
			},
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		GuestComponent,
		UserComponent,
		UafpvacademyComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: environment.meta.title,
					description: environment.meta.description,
					'og:image': environment.meta.image,
					image: environment.meta.image,
					icon: environment.meta.icon,
					titleSuffix: ' | ' + environment.meta.suffix
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard,
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
