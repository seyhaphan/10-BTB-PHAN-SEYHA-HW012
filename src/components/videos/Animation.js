import React from 'react'
import { Link, Route } from 'react-router-dom'

const animationList = ['Action', 'Romance', 'Comedy'];

export default function Animation({ match }) {
   return (
      <div>
         <h2>Animation Category</h2>
         <ul>
            {animationList.map((list, index) => {
               return (
                  <li key={index}>
                     <Link to={`${match.url}/${list.toLowerCase()}`}>{list}</Link>
                  </li>)
            })}
         </ul>

         <Route exact path={'/video/animate'} render={() => <h4>Please Select A Topic</h4>} />

         <Route path={'/video/animate/:aid'} render={({ match }) => <h3>{match.params.aid}</h3>} />
      </div>
   )
}
