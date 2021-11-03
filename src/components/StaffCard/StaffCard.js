import React from "react";
import Card from "react-bootstrap/Card";
import './StaffCard.css'


const StaffCard = () => {
  return (
    <div className="parent">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="https://resources.megatlon.com.ar/images/getImagen?ref=yodytvkj.jpg" />
        <Card.Body style={{ backgroundColor: '#FF5300'}}>
          <Card.Title style={{ textAlign: 'center' }}>Juan</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="https://resources.megatlon.com.ar/images/getImagen?ref=yodytvkj.jpg" />
        <Card.Body style={{ backgroundColor: '#FF5300'}}>
          <Card.Title style={{ textAlign: 'center' }}>Juan</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="https://resources.megatlon.com.ar/images/getImagen?ref=yodytvkj.jpg" />
        <Card.Body style={{ backgroundColor: '#FF5300'}}>
          <Card.Title style={{ textAlign: 'center' }}>Juan</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StaffCard;
