export const partnerFormComponents = {
	formId: 'partner',
	title: 'Partner',
	components: [
		{
			name: 'Photo',
			key: 'thumb',
			class: 'imageContainer',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill partner title'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill partner title'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill partner description'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		},
		{
			name: 'Text',
			key: 'ourrole',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill our role in partnership'
				},
				{
					name: 'Label',
					value: 'Our role'
				}
			]
		}
	]
};
