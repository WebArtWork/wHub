export const usertoolFormComponents = {
	formId: 'usertool',
	title: 'Usertool',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill usertool title',
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
					value: 'fill usertool description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
