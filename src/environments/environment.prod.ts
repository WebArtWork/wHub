import { languages } from 'src/app/core/modules/translate/languages';

export const environment = {
	roles: [],
	production: true,
	appId: 'admin.webart.work',
	url: 'https://webart.work',
	meta: {
		suffix: 'wHub',
		title: 'wHub – Your All-in-One Tech Career Platform',
		description:
			'wHub unites developers, designers, agents, and AI experts in one powerful app. Find jobs, prepare for interviews, master essential skills, manage agency tasks, and prove your expertise—all in one place.',
		image: 'https://whub.webart.work/assets/seo.png',
		icon: 'https://whub.webart.work/assets/favicon.ico'
	},
	user: {
		email: '',
		password: '',
		resetPin: null
	},
	userFields: [],
	userForm: [
		{
			name: 'Text',
			key: 'data.city',
			fields: [
				{
					name: 'Label',
					value: 'City'
				},
				{
					name: 'Placeholder',
					value: 'Enter city where you live ...'
				}
			]
		},
		{
			name: 'Text',
			key: 'data.upwork',
			fields: [
				{
					name: 'Label',
					value: 'Upwork'
				},
				{
					name: 'Placeholder',
					value: 'Enter upwork profile url ...'
				}
			]
		},
		{
			name: 'Text',
			key: 'data.github',
			fields: [
				{
					name: 'Label',
					value: 'Github'
				},
				{
					name: 'Placeholder',
					value: 'Enter github profile url ...'
				}
			]
		},
		{
			name: 'Number',
			key: 'data.fulltime_salary',
			fields: [
				{
					name: 'Label',
					value: 'Full time salary'
				},
				{
					name: 'Placeholder',
					value: 'Enter your full time salary ...'
				}
			]
		},
		{
			name: 'Number',
			key: 'data.parttime_salary',
			fields: [
				{
					name: 'Label',
					value: 'Part time salary'
				},
				{
					name: 'Placeholder',
					value: 'Enter your part time salary ...'
				}
			]
		},
		{
			name: 'Number',
			key: 'data.hourlytime_salary',
			fields: [
				{
					name: 'Label',
					value: 'Hourly salary'
				},
				{
					name: 'Placeholder',
					value: 'Enter your hourly salary ...'
				}
			]
		},
		{
			name: 'Select',
			key: 'languages',
			fields: [
				{
					name: 'Label',
					value: 'Language'
				},
				{
					name: 'Placeholder',
					value: 'Fill languages on which you can talk'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Value',
					skipTranslation: true,
					value: 'name'
				},
				{
					name: 'Items',
					value: languages
				}
			]
		},
		{
			name: 'Select',
			key: 'professions',
			fields: [
				{
					name: 'Label',
					value: 'Professions'
				},
				{
					name: 'Placeholder',
					value: 'Fill professions which you have'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Items',
					value: []
				}
			]
		},
		{
			name: 'Select',
			key: 'skills',
			fields: [
				{
					name: 'Label',
					value: 'Skills'
				},
				{
					name: 'Placeholder',
					value: 'Fill skills which you have'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Items',
					value: []
				}
			]
		},
		{
			name: 'Select',
			key: 'tools',
			fields: [
				{
					name: 'Label',
					value: 'Tools'
				},
				{
					name: 'Placeholder',
					value: 'Fill tools with which you can work'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Items',
					value: []
				}
			]
		}
	],
	applyRoles: ['Influencer', 'Entrepreneur', 'Investor', 'Freelancer']
};
