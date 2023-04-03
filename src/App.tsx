import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <div className="App">
            <Header title={'hello'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'Copyright 2023'}/>
        </div>
    );
}

export default App;
