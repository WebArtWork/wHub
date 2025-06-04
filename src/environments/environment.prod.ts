export const environment = {
	roles: [],
	production: true,
	appId: 'admin.webart.work',
	url: 'https://webart.work',
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
