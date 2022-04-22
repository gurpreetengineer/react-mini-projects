import React from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import PlayerForm from './components/PlayerForm';
import TeamMaker from './components/TeamMaker';

function Routes() {
  return (
    <div>
       <Switch>
          <Route exact path='/PlayerForm' component={PlayerForm} />
          <Route exact path='/TeamMaker' component={TeamMaker} />
        </Switch>
    </div>
  )
}

export default Routes
