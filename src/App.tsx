import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

import './App.scss';

import {HomePage} from "./components/Home/HomePage";
import {Author} from "./components/Author/Author";
import {Topics} from './components/Topics/Topics';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={HomePage}>
                </Route>
                <Route path={"/Author"} component={Author}>
                </Route>
                <Route path={'/Topics'} component={Topics}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
