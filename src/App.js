import React from 'react';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import store from './store';
import './App.css';

import history from './history';
import LinkedPage from "./components/LinkedPage";
import RedirectPage from "./components/RedirectPage";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/linkedPage" component={LinkedPage}/>
                        <Route path="/redirectPage" component={RedirectPage}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </div>
    );
}

export default App;
