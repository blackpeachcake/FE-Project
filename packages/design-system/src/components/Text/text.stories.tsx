import Text from './index'

import type {Meta, StoryObj} from '@storybook/react-vite'

const meta = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['caption', 'body-sm', 'body', 'heading-sm', 'heading', 'heading-lg'],
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'brand', 'success', 'error', 'warning'],
        },
        weight: {
            control: 'select',
            options: ['regular', 'medium', 'bold'],
        },
    },
    args: {
        children: '텍스트를 표시합니다.',
    },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'body',
    },
}

export const AllVariants: Story = {
    render: () => (
        <div style={{display: 'grid', gap: 12}}>
            <Text variant="caption">caption</Text>
            <Text variant="body-sm">body-sm</Text>
            <Text variant="body">body</Text>
            <Text variant="heading-sm">heading-sm</Text>
            <Text variant="heading">heading</Text>
            <Text variant="heading-lg">heading-lg</Text>
        </div>
    ),
}

export const AllColors: Story = {
    render: () => (
        <div style={{display: 'grid', gap: 8}}>
            <Text color="primary">primary</Text>
            <Text color="secondary">secondary</Text>
            <Text color="brand">brand</Text>
            <Text color="success">success</Text>
            <Text color="error">error</Text>
            <Text color="warning">warning</Text>
        </div>
    ),
}

export const Multiline: Story = {
    args: {
        variant: 'body',
        multiline: true,
        children: '첫 번째 줄입니다.\n두 번째 줄입니다.',
    },
}
