import './App.css'
import {Order} from '../types';
import ramenImage from '../assets/ramen.png';
import kimchiImage from '../assets/kimchi.png';
import kimbapImage from '../assets/kimbap.png';
import tteokbokkiImage from '../assets/tteokbokki.png';
import mandooImage from '../assets/mandoo.png';
import bingsuImage from '../assets/bingsu.png';
import dalgonaImage from '../assets/dalgona.png';
import bobateaImage from '../assets/bobatea.png';
import lemonadeImage from '../assets/lemonade.png';
import sojuImage from '../assets/soju.png';
import OrderPanel from '../components/OrderPanel/OrderPanel';
import {useState} from 'react';
import ClientOrderPanel from '../components/ClientOrderPanel/ClientOrderPanel';

export const ORDERS: Order[] = [
  {name: 'Ramen', price: 100, image: ramenImage},
  {name: 'Kimchi', price: 80, image: kimchiImage},
  {name: 'Kimbap', price: 120, image: kimbapImage},
  {name: 'Tteokbokki', price: 200, image: tteokbokkiImage},
  {name: 'Mandoo', price: 110, image: mandooImage},
  {name: 'Bingsu', price: 250, image: bingsuImage},
  {name: 'Dalgona Coffee', price: 100, image: dalgonaImage},
  {name: 'Boba Tea', price: 200, image: bobateaImage},
  {name: 'Lemonade', price: 150, image: lemonadeImage},
  {name: 'Soju', price: 270, image: sojuImage},
];

const App = () => {
  const [orders, setOrders] = useState([
    {name: 'Ramen', count: 0, price: 0},
    {name: 'Kimchi', count: 0, price: 0},
    {name: 'Kimbap', count: 0, price: 0},
    {name: 'Tteokbokki', count: 0, price: 0},
    {name: 'Mandoo', count: 0, price: 0},
    {name: 'Bingsu', count: 0, price: 0},
    {name: 'Dalgona Coffee', count: 0, price: 0},
    {name: 'Boba Tea', count: 0, price: 0},
    {name: 'Lemonade', count: 0, price: 0},
    {name: 'Soju', count: 0, price: 0},
  ]);

  const addOrder = (orderName: string) => {
    const orderItem = ORDERS.find(item => item.name === orderName);
    if (orderItem) {
      setOrders(prevOrders =>
        prevOrders.map(ord => {
          if (ord.name === orderName) {
            return {...ord, count: ord.count + 1, price: ord.price + orderItem.price};
          }
          return ord;
        })
      );
    }
  };

  const removeOrder = (orderName: string) => {
    const orderItem = ORDERS.find(item => item.name === orderName);
    if (orderItem) {
      setOrders(prevOrders =>
        prevOrders.map(ord => {
          if (ord.name === orderName && ord.count > 0) {
            return {...ord, count: ord.count - 1, price: ord.price - orderItem.price};
          }
          return ord;
        })
      );
    }
  };


  return (
    <>
      <ClientOrderPanel
        orders={orders}
        onRemove={removeOrder}
      />
      <OrderPanel
        orders={orders}
        orderDetails={ORDERS}
        onAdd={addOrder}
      />
    </>
  )
};

export default App
