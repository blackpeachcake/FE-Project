import {useState} from 'react'

import classNames from 'classnames/bind'
import {FiEye, FiEyeOff} from 'react-icons/fi'

import styles from './text-field.module.scss'
import TextField from './TextField'

import type {TextFieldProps} from './TextField'

interface TextFieldPasswordProps extends Omit<TextFieldProps, 'type' | 'right'> {
    onVisibilityChange?: (visible: boolean) => void
}

const cx = classNames.bind(styles)

export default function TextFieldPassword({onVisibilityChange, ...rest}: TextFieldPasswordProps) {
    const [visible, setVisible] = useState(false)

    const handleToggle = () => {
        const next = !visible
        setVisible(next)
        onVisibilityChange?.(next)
    }

    return (
        <TextField
            {...rest}
            type={visible ? 'text' : 'password'}
            right={
                <button type="button" onClick={handleToggle} className={cx('toggle-button')}>
                    {visible ? <FiEyeOff /> : <FiEye />}
                </button>
            }
        />
    )
}
