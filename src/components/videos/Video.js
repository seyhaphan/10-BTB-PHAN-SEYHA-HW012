import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Movie from './Movie'
import Animation from './Animation'

export default function Video() {
   return (
      <div>
         <ul>
            <li>
               <Link to={`/video/animate`} >Animation</Link>
            </li>
            <li>
               <Link to={`/video/movie`}>Movie</Link>
            </li>
         </ul>
         <Switch>
            <Route exact path="/video">
               <h2>Please Select A Topic</h2>
            </Route>
            <Route path={'/video/animate'} component={Animation} />
            <Route path={'/video/movie'} component={Movie} />
         </Switch>

      </div>
   )
}
