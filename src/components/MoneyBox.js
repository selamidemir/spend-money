import React, { useEffect, useState } from 'react';
import { formatter } from '../assets/formatter';
import { useSelector } from 'react-redux';
import { selectFirstMoney, selectTotalMoney } from '../redux/storeSlice';


function MoneyBox() {
  const totalMoney = useSelector(selectTotalMoney);
  const firstMoney = useSelector(selectFirstMoney);
  const [total, setTotal] = useState(totalMoney);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const cb = (newCounter) => setTotal(newCounter);
    const count = (startPoint, endPoint, duration, cb) => {
      const incremetSize = Math.abs(parseInt((endPoint - startPoint) / duration));
      if(incremetSize<300) {
        setTotal(totalMoney);
        return false;
      }
      const timer = setInterval(updateCounter);
      var counter = startPoint;

      function updateCounter() {
        if (endPoint >= startPoint) counter < endPoint ? counter += incremetSize : finishCount();
        else if (startPoint > endPoint) counter > endPoint ? counter -= incremetSize : finishCount();
        else finishCount();
        cb(counter);
      }

      const finishCount = () => {
        clearInterval(timer);
        setTotal(totalMoney);
      }
    }

    count(firstMoney, totalMoney, 255, cb);

  }, [firstMoney, totalMoney]);

  useEffect(() => {
    if (!start) setStart(total);
  }, [start, total]);

  return (
    <div className='money-box d-flex justify-content-center align-items-center sticky-top w-100 p-0'>
      {formatter.format(total)}
    </div>
  )
}

export default MoneyBox;