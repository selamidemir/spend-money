import React from 'react';
import { useSelector } from 'react-redux';
import { formatter } from '../assets/formatter';
import { selectBasket, selectItemsInBasket } from '../redux/storeSlice';

function Basket() {
    const basket = useSelector(selectBasket);
    const items = useSelector(selectItemsInBasket);
    return (
        <div className='basket'>
            {
                (basket.totalItem > 0) &&
                <div style={{width: '350px'}}>
                    <h3 className='text-center'>Your Receipt</h3>
                    <div className='fw-700 border-bottom'>
                        {
                            items.map((item, key) => <div key={key} className='d-flex justify-content-between'><span style={{ width: '150px' }}>{item.productName}</span> <span>X {item.count}</span> <span style={{ width: '150px' }} className='text-success text-end'>{formatter.format(item.count * item.productPrice)}</span></div>)
                        }
                    </div>
                    <div className='d-flex justify-content-between fw-700'>
                        <span>TOTAL: </span> <span className='text-primary'>{formatter.format(basket.totalPrice)}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default Basket;