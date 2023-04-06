import React, {useState} from 'react'
import {NewComponent} from "./newComponent";

type FilterType = 'all' | 'som' | 'dollar'

export const FilterComponent = () => {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a123456'},
        {banknote: 'som', nominal: 500, number: 'b123456'},
        {banknote: 'dollar', nominal: 100, number: 'a123456'},
        {banknote: 'som', nominal: 500, number: 'b123456'},
        {banknote: 'dollar', nominal: 100, number: 'a123456'},
        {banknote: 'som', nominal: 500, number: 'b123456'},
        {banknote: 'dollar', nominal: 100, number: 'a123456'},
        {banknote: 'som', nominal: 500, number: 'b123456'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'som') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'som')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
    }

    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    return (

        <NewComponent
            currentMoney={currentMoney}
            onClickFilterHandler={onClickFilterHandler}
        />
        // <>
        //     <ul>
        //         {currentMoney.map((el, i) => {
        //             return (
        //                 <li key={i}>
        //                     <span> {el.banknote} </span>
        //                     <span> {el.nominal} </span>
        //                     <span> {el.number} </span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //
        //     <div style={{marginLeft: '35px'}}>
        //         <button onClick={() => onClickFilterHandler('all')}>All</button>
        //         <button onClick={() => onClickFilterHandler('som')}>Som</button>
        //         <button onClick={() => onClickFilterHandler('dollar')}>Dollar</button>
        //     </div>
        // </>
    )
}