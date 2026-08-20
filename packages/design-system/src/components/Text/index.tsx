import styles from './text.module.scss'

import type {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'

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

interface TextProps extends Omit<ComponentPropsWithoutRef<'p'>, 'color'> {
    variant: TextVariant
    color?: TextColor
    weight?: TextWeight
    as?: ElementType
    children: ReactNode
}

export default function Text({variant, color = 'primary', weight, as, className, children, ...rest}: TextProps) {
    const Tag = as ?? variantConfig[variant].tag
    const textWeight = weight ?? variantConfig[variant].weight

    const classNames = [styles[variant], styles[`color-${color}`], styles[`weight-${textWeight}`], className]
        .filter(Boolean)
        .join(' ')

    return (
        <Tag className={classNames} {...rest}>
            {children}
        </Tag>
    )
}
