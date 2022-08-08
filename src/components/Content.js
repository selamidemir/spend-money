import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Basket from './Basket';
import ItemList from './ItemList';
import MoneyBox from './MoneyBox';

function Content() {
    return (
        <Container className='p-0'>

            <MoneyBox />

            <Row>
                <Col>
                    <ItemList />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Basket />
                </Col>
            </Row>
        </Container>
    );
}

export default Content;