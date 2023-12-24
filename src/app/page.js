"use client";
import Image from "next/image";
import { Row, Col, Card, Button } from "react-bootstrap";
import { data } from "./data";

export default function Home() {
  async function getStats() {
    const data = await fetch("/api");
    const stats = await data.json();

    console.log("stats", stats);
    return stats;
  }

  function getMiles(meters) {
    const miles = meters * 0.000621371192;
    return miles.toFixed(2);
  }

  return (
    <Row>
      <Col md={12} className='mt-4 '>
        <h1>Daniel Rides His Bike</h1>
        <h2>Here are some stats to keep him motivated</h2>
      </Col>
      <Col md={6} className='mt-4'>
        <Card bg='secondary'>
          <Card.Body>
            <Card.Title>Biggest Ride Distance</Card.Title>
            <Card.Text>
              {getMiles(data.biggest_ride_distance)} Miles
              {/* <Button onClick={getStats}>Test</Button> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className='mt-4'>
        <Card bg='info'>
          <Card.Body>
            <Card.Title>YTD Amount of Rides</Card.Title>
            <Card.Text>{data.ytd_ride_totals.count}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Row>
        <Col className='powered-by'>Powered by Strava</Col>
      </Row>
    </Row>
  );
}
