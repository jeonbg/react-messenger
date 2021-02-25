import React, { useEffect, useState } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from './routes/Auth';
import Home from './routes/Home';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
      console.log('LoggedIn Test')
    }, 2000)
  }, [])
  return (
    <Router>
      <Switch>
        {
          isLoggedIn ? (
            <>
              <Route exact path="/" component={Home}/>
            </>
          ) : (
            <>
              <Route exact path="/" component={Auth}/>
            </>
          )
        }
      </Switch>
    </Router>
  )
}

export default AppRouter;