export const usercontractFormComponents = {
	formId: 'usercontract',
	title: 'Usercontract',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill usercontract title',
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
					value: 'fill usercontract description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
