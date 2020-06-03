import React from 'react'
import { Link, Route } from 'react-router-dom'
import queryString from 'query-string'

const style = {
   color: 'red',
   fontWeight: 'bold'
}

function AccountDetail({ location }) {
   let values = queryString.parse(location.search);
   return values.name === undefined ? <h1>There is no name in the query string</h1> : <h1>The <span style={style}>name</span> in the query string is "{values.name}" </h1>
}

const accountList = ['Netflix', 'Zillow Group', 'Yahoo', 'Modus Create'];

export default function Account({ match }) {
   return (
      <div>
         <h1>Account</h1>
         <ul>
            {accountList.map((account, index) => {
               return (
                  <li key={index}>
                     <Link to={`${match.url}/?name=${account}`}>{account}</Link>
                  </li>
               )
            })}
         </ul>
         <Route path="/account" component={AccountDetail} />
      </div>
   )
}
