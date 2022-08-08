import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectBasket } from '../redux/storeSlice';

function Basket() {
    const basket = useSelector(selectBasket);

    return (
        <>
            {
                basket.total > 0 &&
                <Container className='basket'>
                    Basket
                </Container>
            }
        </>
    );
}

export default Basket;