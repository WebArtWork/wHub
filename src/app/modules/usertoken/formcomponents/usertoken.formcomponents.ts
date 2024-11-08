export const usertokenFormComponents = {
	formId: 'usertoken',
	title: 'Usertoken',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill usertoken title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill usertoken description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
