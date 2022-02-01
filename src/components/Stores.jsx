import {Container, Row, Col, Image} from 'react-bootstrap'
import './componentStyles/Stores.css'

function Stores() {
    return (
        <div className="mt-3">
            <h2 className="display-6">Browse stores in Madison, WI</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ justifyContent: "space-evenly"}} >
                    <Col className='store-item'>
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        <div className='mt-3'>
                            <h6 style={{ fontWeight: "bold" }}>ALDI</h6>
                            <p>Pickup 14.0mi</p>
                        </div>
                    </Col>
                    <Col className='store-item'>
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/68/bcf4fed5-5501-451a-8d1a-173f0dab2d01.png" roundedCircle />
                        <div className='mt-3'>
                            <h6 style={{ fontWeight: "bold" }}>Piggly Wiggly</h6>
                            <p>Delivery</p>
                        </div>
                    </Col>
                    <Col className='store-item'>
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1424/cec0f3bd-c2fe-4d14-a18e-856b6f97ee63.jpg" roundedCircle />
                        <div className='mt-3'>
                            <h6 style={{ fontWeight: "bold" }}>Family Dollar</h6>
                            <p>Delivery</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "space-evenly"}} >
                    <Col className='store-item'>
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1258/9c8f4b43-7f4d-429d-a6d1-d076e23c7b75.png" roundedCircle />
                        <div className='mt-3'>
                            <h6 style={{ fontWeight: "bold" }}>The Wine Shop</h6>
                            <p>Delivery</p>
                        </div>
                    </Col>
                    <Col className='store-item'>
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1583/fa5e4859-fb2c-44c5-8428-1d398965ab7b.png" roundedCircle />
                        <div className='mt-3'>
                            <h6 style={{ fontWeight: "bold" }}>Bed Bath & Beyond</h6>
                            <p>Delivery</p>
                        </div>
                    </Col>
                    <Col className='store-item'>
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png" roundedCircle />
                        <div className='mt-3'>
                            <h6 style={{ fontWeight: "bold" }}>Walgreens</h6>
                            <p>Delivery</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Stores