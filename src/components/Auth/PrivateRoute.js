import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from './Login';

export default function PrivateRoute({ children, ...rest }) {
   return (
      <Route {...rest}
         render={() =>
            fakeAuth.isAuthenticated ? children : <Redirect to="/auth" />
         }
      />
   );
}
