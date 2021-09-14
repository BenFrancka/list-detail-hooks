import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RAndMDetailContainer from '../../containers/RAndMDetailContainer';
import RAndMListContainer from '../../containers/RAndMListContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <RAndMDetailContainer />
        </Route>
        <Route path="/">
          <RAndMListContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
