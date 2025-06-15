export const useragencyFormComponents = {
	formId: 'useragency',
	title: 'Useragency',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill useragency title',
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
					value: 'fill useragency description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
