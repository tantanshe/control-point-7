import React from 'react';
import { Order } from '../../types';
import OrderBtn from '../OrderBtn/OrderBtn';

interface OrderPanelProps {
  orders: { name: string; count: number }[];
  orderDetails: Order[];
}
const OrderPanel:React.FC<OrderPanelProps> = ({ orders, orderDetails}) => {
  return (
    <div>
      {orders.map((order) => (
        <div key={order.name}>
          <OrderBtn
            order={order}
            orderDetails={orderDetails}
          />
        </div>
      ))}
    </div>
  );
};

export default OrderPanel;