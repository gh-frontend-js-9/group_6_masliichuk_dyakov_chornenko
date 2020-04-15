import React from 'react';
import './App.scss';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

import {HomePage} from "./components/HomePage/HomePage";
import {NewPage} from "./components/NewPage/NewPage";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component ={HomePage}>
                </Route>
                <Route path={"/NewPage"} component={NewPage}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
