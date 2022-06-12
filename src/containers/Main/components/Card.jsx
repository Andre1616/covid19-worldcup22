import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
    labelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function Card({ value, label, color}) {
    return (
        <CardUI>
            <CardContentStyled color={color}>
            <ValueStyled>{value}</ValueStyled>
            <labelStyled>{label}</labelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)