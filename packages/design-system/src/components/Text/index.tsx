import classNames from 'classnames/bind'

import styles from './text.module.scss'

import type {ElementType, HTMLAttributes, ReactNode} from 'react'

export type TextVariant = 'caption' | 'body-sm' | 'body' | 'heading-sm' | 'heading' | 'heading-lg'
export type TextColor = 'primary' | 'secondary' | 'brand' | 'success' | 'error' | 'warning'
export type TextWeight = 'regular' | 'medium' | 'bold'

// variant별 기본 태그/굵기 매핑

const variantConfig: Record<TextVariant, {tag: ElementType; weight: TextWeight}> = {
    caption: {tag: 'span', weight: 'regular'},
    'body-sm': {tag: 'p', weight: 'regular'},
    body: {tag: 'p', weight: 'regular'},
    'heading-sm': {tag: 'h3', weight: 'bold'},
    heading: {tag: 'h2', weight: 'bold'},
    'heading-lg': {tag: 'h1', weight: 'bold'},
}

interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    variant?: TextVariant
    color?: TextColor
    weight?: TextWeight
    as?: ElementType
    multiline?: boolean
    children: ReactNode
}

export default function Text({
    variant = 'body',
    color = 'primary',
    weight,
    as,
    multiline = false,
    className,
    children,
    ...rest
}: TextProps) {
    const Tag = as ?? variantConfig[variant].tag
    const textWeight = weight ?? variantConfig[variant].weight

    const cx = classNames.bind(styles)
    const classes = cx(variant, `color-${color}`, `weight-${textWeight}`, className)

    const content =
        multiline && typeof children === 'string'
            ? children
                  .split('\n')
                  .flatMap((line, index, lines) => (index < lines.length - 1 ? [line, <br key={index} />] : [line]))
            : children

    return (
        <Tag className={classes} {...rest}>
            {content}
        </Tag>
    )
}
