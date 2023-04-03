import React from 'react'

export type BodyPropsType = {
    titleForBody: string
}
export const Body = (props: BodyPropsType) => {
    return (
        <>
            {props.titleForBody}
        </>
    )
}
