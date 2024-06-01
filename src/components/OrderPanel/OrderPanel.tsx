import React from 'react';
import {Order} from '../../types';
import OrderBtn from '../OrderBtn/OrderBtn';

interface OrderPanelProps {
  orders: { name: string; count: number }[];
  orderDetails: Order[];
  onAdd: (name: string) => void;
}

const OrderPanel: React.FC<OrderPanelProps> = ({orders, orderDetails, onAdd}) => {
  return (
    <div className="orders-panel">
      {orders.map((order) => (
        <div key={order.name}>
          <OrderBtn
            order={order}
            orderDetails={orderDetails}
            onAdd={() => onAdd(order.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default OrderPanel;