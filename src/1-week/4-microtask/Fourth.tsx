import React from 'react'
import {Button} from "../components/Button";

export const Fourth = () => {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    return (
        <>
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('I am Umpa', 21, 'US')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('I am Lumpa', 23, 'Bishkek')}/>
        </>
    )
}