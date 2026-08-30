import TextField from './index'

import type {Meta, StoryObj} from '@storybook/react-vite'

const meta = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'line'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        status: {
            control: 'select',
            options: ['default', 'error', 'success'],
        },
    },
    args: {
        label: '이메일',
        placeholder: 'example@email.com',
        helperText: '가입 시 사용한 이메일을 입력하세요',
    },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'outline',
        size: 'md',
        status: 'default',
    },
}

export const Variants: Story = {
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <TextField {...args} variant="outline" />
            <TextField {...args} variant="filled" />
            <TextField {...args} variant="line" />
        </div>
    ),
}

export const Sizes: Story = {
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <TextField {...args} size="sm" />
            <TextField {...args} size="md" />
            <TextField {...args} size="lg" />
        </div>
    ),
}

export const Status: Story = {
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <TextField {...args} status="default" helperText="가입 시 사용한 이메일을 입력하세요" />
            <TextField {...args} status="error" helperText="올바른 이메일 형식이 아니에요" />
            <TextField {...args} status="success" helperText="사용 가능한 이메일이에요" />
        </div>
    ),
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}
export const Password: Story = {
    render: (args) => (
        <TextField.Password
            {...args}
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            helperText="8자 이상 입력해주세요"
        />
    ),
}
