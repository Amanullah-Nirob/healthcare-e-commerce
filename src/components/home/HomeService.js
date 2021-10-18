import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
    const {img,title,dic,id}=props.service
    return (
    <div className='singleServices'>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {dic}
          </Card.Text>
          <Link to={`/HomeService/${id}`}>read more</Link>
          
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default HomeService;