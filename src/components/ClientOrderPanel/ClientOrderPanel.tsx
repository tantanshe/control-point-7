import React from 'react';

interface ClientOrderPanelProps {
  orders: { name: string; count: number; price: number }[];
  onRemove: (name: string) => void;
}
const ClientOrderPanel:React.FC<ClientOrderPanelProps> = ({orders, onRemove}) => {

  return (
    <div>
      {orders
        .filter(order => order.count > 0)
        .map(order => (
          <div key={order.name} className="client-order">
            <span>{order.name}</span>
            <span>{order.count}</span>
            <span>{order.price}</span>
            <button onClick={() => onRemove(order.name)}>X</button>
          </div>
        ))}
    </div>
  );
};

export default ClientOrderPanel;