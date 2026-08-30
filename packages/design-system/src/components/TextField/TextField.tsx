import {useId} from 'react'

import classNames from 'classnames/bind'

import styles from './text-field.module.scss'

import type {ComponentPropsWithoutRef, ReactNode} from 'react'

export type TextFieldVariant = 'outline' | 'filled' | 'line'
export type TextFieldSize = 'sm' | 'md' | 'lg'
export type TextFieldStatus = 'default' | 'error' | 'success'

export interface TextFieldProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
    variant?: TextFieldVariant
    size?: TextFieldSize
    status?: TextFieldStatus
    label?: string
    helperText?: string
    right?: ReactNode
}

const cx = classNames.bind(styles)

export default function TextField({
    variant = 'outline',
    size = 'md',
    status = 'default',
    label,
    helperText,
    right,
    className,
    id,
    ...rest
}: TextFieldProps) {
    const generatedId = useId()
    const inputId = id ?? generatedId

    const wrapperClasses = cx('input-wrapper', variant, `size-${size}`, status, className)
    const Label = label && (
        <label htmlFor={inputId} className={cx('label', status)}>
            {label}
        </label>
    )

    const HelpText = helperText && <span className={cx('helper-text', status)}>{helperText}</span>

    return (
        <div className={cx('field')}>
            {Label}
            <div className={wrapperClasses}>
                <input className={cx('input')} id={inputId} {...rest} />
                {right && <span className={cx('right-slot')}>{right}</span>}
            </div>

            {HelpText}
        </div>
    )
}
