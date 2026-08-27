import Button from './index'

import type {Meta, StoryObj} from '@storybook/react-vite'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost'],
        },
        color: {
            control: 'select',
            options: ['brand', 'success', 'error', 'warning'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
    args: {
        children: 'Button',
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'solid',
        color: 'brand',
        size: 'md',
    },
}

export const Variants: Story = {
    render: (args) => (
        <div style={{display: 'flex', gap: 8}}>
            <Button {...args} variant="solid" />
            <Button {...args} variant="outline" />
            <Button {...args} variant="ghost" />
        </div>
    ),
}

export const Sizes: Story = {
    render: (args) => (
        <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
            <Button {...args} size="sm" />
            <Button {...args} size="md" />
            <Button {...args} size="lg" />
        </div>
    ),
}

export const Loading: Story = {
    args: {
        loading: true,
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const FullWidth: Story = {
    args: {
        fullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
}
