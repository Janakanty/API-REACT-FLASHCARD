import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './style.css';


import MenuItem from './MenuItem';
import Spells from './spells';
import Sport from './sport';
import Home from './home';
import Geo from './geo';
import Music from './music';



class App extends Component {
    render() {
        return (
            <div className="powitanie">

            
                <BrowserRouter>
                <Home />
             <div className="menu">

           <a><MenuItem itemName="Historia" itemPath='/spells'></MenuItem></a>
           <a> <MenuItem itemName="Sport" itemPath='/sport'></MenuItem> </a>
           <a> <MenuItem itemName="Geografia" itemPath='/geo'></MenuItem> </a>
           <a> <MenuItem itemName="Muzyka" itemPath='/music'></MenuItem> </a>

            </div>
                <div>
                    <Switch>
                        <Route exact path='/spells' component={Spells}/>
                        <Route exact path='/sport' component={Sport}/>
                        <Route exact path='/geo' component={Geo}/>
                        <Route exact path='/music' component={Music}/>
                    </Switch>
                </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
