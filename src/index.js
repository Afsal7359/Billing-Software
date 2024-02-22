import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./App"
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import AddProducts from './pages/AddProducts';
import CreateUOM from './pages/CreateUOM';
import Billing from './pages/Billing';
import Report from './pages/Report';
import Ledger from './pages/Ledger';


ReactDOM.render(
    <Router>
        <Sidebar/>
            <main>
                
                <Route exact path="/" component={Home} />
                <Route  path="/product" component={AddProducts} />
                <Route  path="/uom" component={CreateUOM} />
                <Route path='/ledger' component={Ledger}/>
                <Route  path="/billing" component={Billing}/>
                <Route  path="/report" component={Report} />
                <Route  path='/login' component={Login}/>
            </main>
    </Router>, 
    document.getElementById("root")
    
)
