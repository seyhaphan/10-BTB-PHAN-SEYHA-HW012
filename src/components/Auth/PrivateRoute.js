import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Auth } from './Login';

export default function PrivateRoute({ children, ...rest }) {
   return (
      <Route {...rest}
         render={() =>
            Auth.isAuthenticated ? children : <Redirect to="/auth" />
         }
      />
   );
}
