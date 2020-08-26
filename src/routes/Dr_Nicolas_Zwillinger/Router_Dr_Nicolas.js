import React from 'react';
import A_propos from './A_propos';
import Equipe from './Equipe';
import Cliniques from './Cliniques'
import Interventions from './Interventions'
import Paris_aesthetic from './Paris_aesthetic'
import {Route} from 'react-router-dom';
function Router_Dr_Nicolas() {
  return (
      <React.Fragment> 
        <Route path="/A_propos_de_nous" exact component={A_propos} ></Route>
        <Route path="/Equipe" exact component={Equipe} ></Route>
        <Route path="/Paris_aesthetic_surgery_institute" exact component={Paris_aesthetic} ></Route>
        <Route path="/Cliniques" exact component={Cliniques} ></Route>
        <Route path="/Interventions" exact component={Interventions} ></Route>
   </React.Fragment>    
  );
}

export default Router_Dr_Nicolas;
