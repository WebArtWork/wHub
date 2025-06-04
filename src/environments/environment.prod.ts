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
		...['developer', 'designer', 'agent'].map((position) => {
			return {
				name: 'Boolean',
				key: 'data.apply' + position,
				fields: [
					{
						name: 'Label',
						value: 'Apply for ' + position
					}
				]
			};
		})
	]
};
