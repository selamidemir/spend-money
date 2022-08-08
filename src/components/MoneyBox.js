import React from 'react';
import { formatter } from '../assets/formatter';
import { useSelector } from 'react-redux';
import { selectTotalMoney } from '../redux/storeSlice';


function MoneyBox() {
  const totalMoney = useSelector(selectTotalMoney);

  return (
    <div className='money-box d-flex justify-content-center align-items-center sticky-top w-100 p-0'>
      {formatter.format(totalMoney)}
    </div>
  )
}

export default MoneyBox;