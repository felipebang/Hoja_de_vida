import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Contact from './Contact';





export default class Footerapp extends Component {
    render() {
        return (





      

          <Card style={{ width: '100rem' }}>
          <Card.Img variant="top" src=""  />
          <Card.Body>
            <Card.Title>CBI</Card.Title>
            <Card.Text>
            Centro Bíblico Internacional
            </Card.Text>
            <a href="./Contact">
            <Button variant="primary">Inicio</Button>
            </a>
          </Card.Body>
        </Card>


                
          
        )
    }
}
