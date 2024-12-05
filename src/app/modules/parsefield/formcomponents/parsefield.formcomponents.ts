export const parsefieldFormComponents = {
	formId: 'parsefield',
	title: 'Parsefield',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill parsefield title',
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
					value: 'fill parsefield description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
