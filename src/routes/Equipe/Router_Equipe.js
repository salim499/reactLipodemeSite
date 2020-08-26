import React from 'react'
import {Route} from 'react-router-dom'
import Docteur_Aldea_Biographie from './Docteur_Aldea_Biographie'
import Docteur_Caraco_Biographie from './Docteur_Caraco_Biographie'
import Severine_Biographie from './Severine_Biographie'
import Docteur_Zwillinger_Biographie from './Docteur_Zwillinger_Biographie'

function Router_Equipe(){
return(
    <React.Fragment>
        <Route path="/Docteur_Zwillinger" exact component={Docteur_Zwillinger_Biographie}></Route>
        <Route path="/Severine" exact component={Severine_Biographie}></Route>
        <Route path="/Docteur_Aldea" exact component={Docteur_Aldea_Biographie}></Route>
        <Route path="/Docteur_Caraco" exact component={Docteur_Caraco_Biographie}></Route>
    </React.Fragment>
)
}
export default Router_Equipe;