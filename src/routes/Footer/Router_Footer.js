import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../Home'
import Plan_Du_Site from './Plan_Du_Site'
import Mentions_Legales from './Mentions_Legales'

function Router_Footer(){
    return(
        <React.Fragment>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Plan_Du_Site" exact component={Plan_Du_Site}></Route>
        <Route path="/Mentions_Légales" exact component={Mentions_Legales}></Route>
        </React.Fragment>
    )
}
export default Router_Footer;