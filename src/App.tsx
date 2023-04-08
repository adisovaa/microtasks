import React from 'react';
import {Header} from "./1-week/1-microtask/Header";
import {Body} from "./1-week/1-microtask/Body";
import {Footer} from "./1-week/1-microtask/Footer";
import {NewComponent} from "./1-week/2-microtask/map";
import {Button} from "./1-week/3-microtask/Button";
import {Fourth} from "./1-week/4-microtask/Fourth";
import {Fifth} from "./1-week/5-microtask/Fifth";
import {FilterComponent} from "./1-week/6-microtask/6-microtask";
import {InputMain} from "./2-week/input";


const student = [
    {id: 1, name: 'Alexa', age: 23},
    {id: 2, name: 'John', age: 34},
    {id: 3, name: 'David', age: 73},
    {id: 4, name: 'Almira', age: 13},
    {id: 5, name: 'Aizharkyn', age: 10},
    {id: 6, name: 'Aksana', age: 14},
    {id: 7, name: 'Malika', age: 65},
    {id: 8, name: 'Ann', age: 43},
    {id: 9, name: 'Nurkanella', age: 73},
    {id: 10, name: 'Alim', age: 34},
    {id: 12, name: 'Nursultan', age: 18},
]

function App() {
    return (
        <div className="App">
           {/*<div className="1-week">*/}
           {/*    <Header title={'hello'}/>*/}
           {/*    <Body titleForBody={'New Body'}/>*/}
           {/*    <Footer titleForFooter={'Copyright 2023'}/>*/}
           {/*    <NewComponent student={student}/>*/}
           {/*    <Button/>*/}
           {/*    <Fourth/>*/}
           {/*    <Fifth/>*/}
           {/*    <FilterComponent/>*/}
           {/*</div>*/}

            <div className="2-week">
                <InputMain/>
            </div>

        </div>
    );
}

export default App;
