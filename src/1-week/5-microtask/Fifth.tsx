import React, {useState} from 'react'

export const Fifth = () => {
    let [a, setA] = useState(0)

    const onClickHandler = () => {
        setA(++a)
    }

    const onClickClean = () => {
        setA(0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickClean}>Clean</button>
        </div>
    )
}