import React from 'react';
import './App.module.css';

import {Header} from "../features/header/Header";
import {Navigation} from '../features/navigation/Navigation';
import {TestComponent} from "../common/components/TestComponent/TestComponent";

export const App = () => {
    return (
        <div>
            <Header/>
            <Navigation/>

            <TestComponent/>

        </div>
    );
}


