import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/lorem-ipsum1" exact component={Main} />
        <Route path="/lorem-ipsum2" exact component={Main} />
        <Route path="/lorem-ipsum3" exact component={Main} />
        <Route path="/lorem-ipsum4" exact component={Main} />
        <Route path="/lorem-ipsum5" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
