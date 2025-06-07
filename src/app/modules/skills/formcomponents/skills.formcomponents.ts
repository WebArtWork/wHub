export const skillsFormComponents = {
	formId: 'skills',
	title: 'Skills',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill skills title',
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
					value: 'fill skills description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
