import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import g1 from '../../Assets/images/guide1.png'
import g2 from '../../Assets/images/guide2.png'
import g3 from '../../Assets/images/guide3.png'

const Guide = () => {
    return (
        <div>
            {/* here statically show our guide data*/}
            <h1>Our <span className="text-danger">Tour Guide</span></h1>
            <div className='container my-5'>
                <Row xs={1} md={3} className="g-4 ">
                    {/* 1st card start */}
                    <Col>
                        <Card style={{ border: 'none' }}>
                            <Card.Img variant="top" src={g1} style={{ height: "280px", borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title> Alex Furgosen</Card.Title>
                                <Card.Text>
                                    When we were touring with The Mighty Boosh, we went on a ghost tour of York. It was all about ghosts, and the tour guide was hilarious.
                                </Card.Text>
                                <Button variant="outline-dark">Contact us</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 1st card end */}

                    {/* 2st card start */}
                    <Col>
                        <Card style={{ border: 'none' }}>
                            <Card.Img variant="top" src={g2} style={{ height: "280px", borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title>Smith</Card.Title>
                                <Card.Text>
                                    When we were touring with The Mighty Boosh, we went on a ghost tour of York. It was all about ghosts, and the tour guide was hilarious.
                                </Card.Text>
                                <Button variant="outline-dark">Contact Us</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 2st card end */}

                    {/* 3st card start */}
                    <Col>
                        <Card style={{ border: 'none' }}>
                            <Card.Img variant="top" src={g3} style={{ height: "280px", borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title> Sharon Laura</Card.Title>
                                <Card.Text>
                                    When we were touring with The Mighty Boosh, we went on a ghost tour of York. It was all about ghosts, and the tour guide was hilarious.
                                </Card.Text>
                                <Button variant="outline-dark">Contact us</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 3st card end */}
                </Row>
            </div>
        </div>
    );
};

export default Guide;