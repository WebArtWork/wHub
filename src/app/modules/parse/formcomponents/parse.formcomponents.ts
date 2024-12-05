export const parseFormComponents = {
	formId: 'parse',
	title: 'Parse',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill parse title',
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
					value: 'fill parse description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
