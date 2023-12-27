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
    return miles.toFixed(2) + " Miles";
  }

  function formatNames(name) {
    const splitName = name.split("_").join(" ");

    return splitName;
  }

  const info = Object.keys(data).map((name) => (
    <Col md={6} className='mt-4' key={name}>
      <Card bg='secondary'>
        <Card.Body>
          <Card.Title>{formatNames(name)}</Card.Title>
          <Card.Text>{getMiles(data[name].toString())}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Row>
      <Col md={12} className='mt-2'>
        <h1>Daniel Rides His Bike</h1>
        <h2>Here are some stats to keep him motivated</h2>
      </Col>
      {info}
      <Row>
        <Col className='powered-by'>Powered by Strava</Col>
      </Row>
    </Row>
  );
}
