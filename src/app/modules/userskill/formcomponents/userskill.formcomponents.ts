export const userskillFormComponents = {
	formId: 'userskill',
	title: 'Userskill',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill userskill title',
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
					value: 'fill userskill description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
