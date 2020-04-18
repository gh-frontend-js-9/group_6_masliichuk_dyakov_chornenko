import React from 'react';
import './App.scss';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

import {HomePage} from "./components/Home/HomePage";
import {Author} from "./components/Author/Author";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={HomePage}>
                </Route>
                <Route path={"/Author"} component={Author}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
