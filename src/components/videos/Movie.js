import React from 'react'
import { Link, Route } from 'react-router-dom'

const movieList = ['Advendture', 'Comdey', 'Crime', 'Documentary'];

export default function Movie({ match }) {
   return (
      <div>
         <h1>Movie Categroy</h1>
         <ul>
            {movieList.map((movie, index) => {
               return (
                  <li key={index}>
                     <Link to={`${match.url}/${movie.toLowerCase()}`}>{movie}</Link>
                  </li>
               )
            })}
         </ul>
         <Route exact path="/video/movie" render={() => <h4>Please Select A Topic</h4>} />
         <Route path="/video/movie/:mid" render={({ match }) => <h3>{match.params.mid}</h3>} />
      </div>
   )
}
