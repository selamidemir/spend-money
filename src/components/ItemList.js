import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/storeSlice';
import Item from './Item';

function ItemList() {
    const items = useSelector(selectItems);
    return (
        <div className='p-0 m-0'>
            <ul className='item-list'>
                {
                    items.map((item, key) => <li key={key}><Item item={item} /></li>)
                }
            </ul>
        </div>
    )
}

export default ItemList