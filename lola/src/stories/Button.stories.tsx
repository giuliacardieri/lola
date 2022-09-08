import TheButton from '@/components/base/TheButton.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
	title: 'Lola/Button',
	component: TheButton,
    decorators: [() => 
        ({ template: '<div class="lola-main"><story/></div>' })
    ],
	argTypes: {
        onClick: { action: 'clicked' },
		ariaLabel: { control: 'text' },
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
} as Meta<typeof TheButton>;

const Template: StoryFn<typeof TheButton> = (args) => ({
	components: { TheButton },
	setup() {
		return { args }
	},
	template: '<TheButton v-bind="args" />',
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

export const AriaLabel = Template.bind({})
AriaLabel.args = {
	ariaLabel: 'This is an aria label',
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
