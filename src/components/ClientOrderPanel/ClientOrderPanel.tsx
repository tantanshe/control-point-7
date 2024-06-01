import React from 'react';

interface ClientOrderPanelProps {
  orders: { name: string; count: number; price: number }[];
  onRemove: (name: string) => void;
}

const ClientOrderPanel: React.FC<ClientOrderPanelProps> = ({orders, onRemove}) => {
  const activeOrders = orders.filter(order => order.count > 0);
  const totalPrice = activeOrders.reduce((acc, order) => acc + order.price, 0);

  return (
    <div>
      {activeOrders.length > 0 ? (
        <>
          {activeOrders.map(order => (
            <div key={order.name} className={order.name}>
              <span>{order.name}</span>
              <span>{order.count}</span>
              <span>{order.price}</span>
              <button onClick={() => onRemove(order.name)}>X</button>
            </div>
          ))}
          <div>Total Price: {totalPrice} KGS</div>
        </>
      ) : (
        <div>No orders available</div>
      )}
    </div>
  );
};

export default ClientOrderPanel;