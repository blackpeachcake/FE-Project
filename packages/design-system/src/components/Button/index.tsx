import classNames from 'classnames/bind'
import {ClipLoader} from 'react-spinners'

import styles from './button.module.scss'

import type {ComponentPropsWithoutRef, ReactNode} from 'react'
export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonColor = 'brand' | 'success' | 'error' | 'warning'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
    variant?: ButtonVariant
    color?: ButtonColor
    size?: ButtonSize
    loading?: boolean
    fullWidth?: boolean
    children: ReactNode
}

const cx = classNames.bind(styles)

export default function Button({
    variant = 'solid',
    color = 'brand',
    size = 'md',
    loading = false,
    fullWidth = false,
    className,
    children,
    ...rest
}: ButtonProps) {
    const classes = cx(
        'button',
        variant,
        `color-${color}`,
        `size-${size}`,
        {loading},
        {'full-width': fullWidth},
        className,
    )

    const isDisabled = loading || rest.disabled

    return (
        <button className={classes} aria-busy={loading} {...rest} disabled={isDisabled}>
            {loading && <ClipLoader size="1em" color="currentColor" />}
            {children}
        </button>
    )
}
