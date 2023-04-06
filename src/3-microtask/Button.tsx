import React from 'react'

export const Button = () => {
    // const myFirstSubscriber1 = (event:MouseEvent<HTMLButtonElement>) => {
    //     return console.log('Siri')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     return console.log('Alexa')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foo1 = () => {
        console.log('Brooo!')
    }
    const foo2 = (num: number) => {
        console.log(num)
    }

    return (
        <div>
            {/*<button onClick={(event) => onClickHandler('Alex')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('Siri')}>MyYouTubeChanel-2</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={(e) => foo2(100200)}>2</button>
        </div>
    )
}