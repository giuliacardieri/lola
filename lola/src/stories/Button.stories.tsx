import Button from '@/components/base/TheButton.vue'
import type { Story } from '@storybook/vue3'

interface ArgTypes {
	label: string
}

export default {
	title: 'Lola/Button',
	component: Button,
	argTypes: {
		outline: { control: 'boolean' },
		disabled: { control: 'boolean' },
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset'],
		},
		target: {
			control: { type: 'select' },
			options: ['_self', '_blank'],
		},
		href: { control: 'text' },
		label: { control: 'text' },
	},
}

const Template: Story<{
	label: string
	outline?: Boolean
	disabled: boolean
	target: string
	href: string
}> = (args) => ({
	components: { Button },
	setup() {
		return { args }
	},
	template: '<Button v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
	label: 'Button',
}

export const Outline = Template.bind({})
Outline.args = {
	outline: true,
	label: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
	label: 'Button',
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
	target: '_blank',
	href: 'https://dinokiki.com',
	label: 'Button',
}

export const InternalLink = Template.bind({})
InternalLink.args = {
	href: 'https://dinokiki.com',
	label: 'Button',
}
