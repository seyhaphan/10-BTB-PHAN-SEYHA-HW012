import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap'

export default class Login extends Component {
   state = {
      redirectToReferrer: false
   }
   onSubmit = (e) => {
      e.preventDefault();
      fakeAuth.authenticate(() => {
         this.setState({
            redirectToReferrer: true
         })
      });
   };
   render() {
      if (this.state.redirectToReferrer) {
         return <Redirect to="/welcome" />
      }
      return (
         <Container style={{ marginTop: 20 }}>
            <div className="w-50 m-auto shadow p-5">
               <Form onSubmit={this.onSubmit}>
                  <Form.Group controlId="formBasicText">
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" placeholder="Username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                     Submit
            </Button>
               </Form>
            </div>
         </Container>
      )
   }
}

export const fakeAuth = {
   isAuthenticated: false,
   authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb)
   },
};