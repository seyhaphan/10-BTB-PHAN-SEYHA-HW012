import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { data } from '../../data/Data';
import { Link } from 'react-router-dom';
export default function Home(props) {

   return (
      <Container className="mt-5">
         <Row>
            {data.map(data =>
               <Col md={3} key={data.id}>
                  <Card>
                     <Link to={`/posts/${data.id}`}>
                        <Card.Img className="pl-5 pr-5 pt-3" height="150px" src={data.img} />
                     </Link>
                     <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.text}</Card.Text>
                        <Button variant="primary" onClick={() => props.history.push(`/posts/${data.id}`)}>See More</Button>
                     </Card.Body>
                  </Card>
               </Col>
            )}
         </Row>
      </Container>
   )
}
