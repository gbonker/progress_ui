import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Details from '../details/Details';
import List from '../list/List';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/list"/>
        )} />
        <Route path='/list' component={List}/>
        <Route path='/details' component={Details}/>
      </Switch>
    </main>
  );
}

export default Main;