import React from 'react';
import {Order} from '../../types';

interface OrderBtn {
  order: { name: string, count: number };
  orderDetails: Order[];
  onAdd: () => void;
}

const OrderBtn: React.FC<OrderBtn> = ({order, orderDetails, onAdd}) => {
  const orderDetail = orderDetails.find(ord => ord.name === order.name);

  if (!orderDetail) {
    return null;
  }
  return (
    <div>
      <button onClick={onAdd} className="order">
        <div className="image-container">
          <img src={orderDetail.image} alt={orderDetail.name} className="image"/>
        </div>
        <div className="order-info">
          <span><strong>{orderDetail.name}</strong></span>
          <span><strong>Price:</strong> {orderDetail.price} KGS</span>
        </div>
      </button>
    </div>
  );
};

export default OrderBtn;