import React from 'react'

export type FooterPropsType = {
    titleForFooter: string
}
export const Footer = (props: FooterPropsType) => {
    return (
        <>
            {props.titleForFooter}
        </>
    )
}
