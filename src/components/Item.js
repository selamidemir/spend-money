import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatter } from '../assets/formatter';
import { buyItem, selectTotalMoney, sellItem } from '../redux/storeSlice';


function Item({ item }) {
    const dispatch = useDispatch();
    const totalMoney = useSelector(selectTotalMoney);

    const handleBuy = (e) => {
        e.preventDefault();
        dispatch(buyItem({ id: item.id }));
    }

    const handleSell = (e) => {
        e.preventDefault();
        dispatch(sellItem({ id: item.id }));
    }

    return (
        <div className='item'>
            <div className='item-image'>
                <img src={item.image} alt={item.productName} />
            </div>
            <div className='product-name'>{item.productName}</div>
            <div className='product-price'>{formatter.format(item.productPrice)}</div>
            <form className='buy-sell-form'>
                { item.count > 0 ? <button className='btn-sell' onClick={(e) => handleSell(e)}>Sell</button> : <button className='btn-sell' disabled>Sell</button>}
                <input className='input-quantity' type='number' value={item.count} disabled />
                { (totalMoney > 0) && !(item.unique && item.count === 1) ? <button className='btn-buy' onClick={(e) => handleBuy(e)}>Buy</button> : <button className='btn-buy' disabled>Buy</button>}
            </form>
        </div>
    )
}

export default Item;