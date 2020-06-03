import React from 'react'

export default function Posts({ match }) {
   return (
      <div className="App">
         <h1>This is content from post {match.params.id}</h1>
      </div>
   )
}
