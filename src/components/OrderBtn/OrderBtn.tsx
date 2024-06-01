import React from 'react';
import { Order} from '../../types';

interface OrderBtn {
  order: { name: string, price: number }
  orderDetails: Order[];
}

const OrderBtn:React.FC<OrderBtn> = ({order, orderDetails}) => {
  const orderDetail = orderDetails.find(ord => ord.name === order.name);

  if (!orderDetail) {
    return null;
  }
  return (
    <div>
      <button>
        <img src={orderDetail.image} alt={orderDetail.name} style={{width: "70px"}}/>
        {orderDetail.name}
        <span>{orderDetail.price}</span>
      </button>
    </div>
  );
};

export default OrderBtn;