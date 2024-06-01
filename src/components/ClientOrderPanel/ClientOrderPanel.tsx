import React from 'react';
import trashIcon from '../../assets/trash.png';

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
            <div key={order.name} className="client-order-item">
              <span><strong>{order.name}:</strong></span>
              <div className="client-order-info">
                <span>x{order.count}</span>
                <span>{order.price} KGS</span>
                <button onClick={() => onRemove(order.name)} className="delete-btn">
                  <img src={trashIcon} alt="trash" className="trash-icon"/>
                </button>
              </div>
            </div>
          ))}
          <hr/>
          <div><strong>Total Price:</strong> {totalPrice} KGS</div>
        </>
      ) : (
        <div>
          <span>No orders available yet!</span>
          <br></br>
          <span>Try to order something!</span>
        </div>
      )}
    </div>
  );
};

export default ClientOrderPanel;