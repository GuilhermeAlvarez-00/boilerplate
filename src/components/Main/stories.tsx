import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Main } from '.'

export default {
	title: 'Main',
	component: Main,
	args: {
		title: 'Title Default',
		description: 'Description default'
	}
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />
