import React, {useState} from 'react'

export type NewComponentType = {
    currentMoney: Array<CurrenType>
    onClickFilterHandler: (string: any) => void
}

type CurrenType = {
    banknote: string
    nominal: number
    number: string
}
export const NewComponent = (props:NewComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((el, i) => {
                    return (
                        <li key={i}>
                            <span> {el.banknote} </span>
                            <span> {el.nominal} </span>
                            <span> {el.number} </span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>All</button>
                <button onClick={() => props.onClickFilterHandler('som')}>Som</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>Dollar</button>
            </div>
        </>
    )
}