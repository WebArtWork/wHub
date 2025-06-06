import { languages } from 'src/app/core/modules/translate/languages';

export const userportfolioFormComponents = {
	formId: 'userportfolio',
	title: 'Userportfolio',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill portfolio title'
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
					value: 'fill portfolio description'
				},
				{
					name: 'Label',
					value: 'Description'
				},
				{
					name: 'Textarea',
					value: true
				}
			]
		},
		{
			name: 'Text',
			key: 'data.period',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill portfolio time period'
				},
				{
					name: 'Label',
					value: 'Period'
				}
			]
		},
		{
			name: 'Text',
			key: 'data.git',
			fields: [
				{
					name: 'Label',
					value: 'Git'
				},
				{
					name: 'Placeholder',
					value: 'Enter if such exists git public repo url ...'
				}
			]
		},
		{
			name: 'Select',
			key: 'languages',
			fields: [
				{
					name: 'Label',
					value: 'Language'
				},
				{
					name: 'Placeholder',
					value: 'Fill languages on which you can talk'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Value',
					skipTranslation: true,
					value: 'name'
				},
				{
					name: 'Items',
					value: languages
				}
			]
		},
		{
			name: 'Select',
			key: 'professions',
			fields: [
				{
					name: 'Label',
					value: 'Professions'
				},
				{
					name: 'Placeholder',
					value: 'Fill professions which you have'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Items',
					value: []
				}
			]
		},
		{
			name: 'Select',
			key: 'skills',
			fields: [
				{
					name: 'Label',
					value: 'Skills'
				},
				{
					name: 'Placeholder',
					value: 'Fill skills which you have'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Items',
					value: []
				}
			]
		},
		{
			name: 'Select',
			key: 'tools',
			fields: [
				{
					name: 'Label',
					value: 'Tools'
				},
				{
					name: 'Placeholder',
					value: 'Fill tools with which you can work'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Items',
					value: []
				}
			]
		},
		{
			name: 'Photo',
			key: 'thumb',
			fields: [
				{
					name: 'Label',
					value: 'Photo'
				}
			]
		},
		{
			name: 'Photo',
			key: 'thumbs',
			fields: [
				{
					name: 'Label',
					value: 'Photos'
				}
			]
		}
	]
};
