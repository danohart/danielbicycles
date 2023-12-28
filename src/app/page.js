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

  return (
    <Row>
      <Col md={12} className='mt-2'>
        <h1>Daniel Rides His Bike</h1>
        <h2>Here are some stats to keep him motivated</h2>
      </Col>
      <Col md={6} className='mt-4'>
        <Card bg='secondary'>
          <Card.Body>
            <Card.Title>Recent Rides</Card.Title>
            <Card.Text>
              <div>Total: {data.recent_ride_totals.count}</div>
              <div>Distance: {getMiles(data.recent_ride_totals.distance)}</div>
              <div>
                Achivement Count: {data.recent_ride_totals.achievement_count}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className='mt-4'>
        <Card bg='primary'>
          <Card.Body>
            <Card.Title>Total Rides</Card.Title>
            <Card.Text>
              <div>Total: {data.all_ride_totals.count}</div>
              <div>Distance: {getMiles(data.all_ride_totals.distance)}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Row>
        <Col className='powered-by'>Powered by Strava</Col>
      </Row>
    </Row>
  );
}
