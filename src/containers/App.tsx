import './App.css'
import {Order} from '../types';
import ramenImage from '../assets/ramen.png';
import kimchiImage from '../assets/kimchi.png';
import kimbapImage from '../assets/kimbap.png';
import tteokbokkiImage from '../assets/tteokbokki.png';
import mandooImage from '../assets/mandoo.png';
import bingsuImage from '../assets/bingsu.png';
import OrderPanel from '../components/OrderPanel/OrderPanel';
import {useState} from 'react';

export const ORDERS: Order[] = [
  {name: 'Ramen', price: 100, image: ramenImage},
  {name: 'Kimchi', price: 80, image: kimchiImage},
  {name: 'Kimbap', price: 120, image: kimbapImage},
  {name: 'Tteokbokki', price: 200, image: tteokbokkiImage},
  {name: 'Mandoo', price: 110, image: mandooImage},
  {name: 'Bingsu', price: 250, image: bingsuImage},
];

const App = () => {
  const [orders, setOrders] = useState([
    {name: 'Ramen', count: 0},
    {name: 'Kimchi', count: 0},
    {name: 'Kimbap', count: 0},
    {name: 'Tteokbokki', count: 0},
    {name: 'Mandoo', count: 0},
    {name: 'Bingsu', count: 0},
  ]);

    return (
        <>
          <OrderPanel
            orders={orders}
            orderDetails={ORDERS}
          />
        </>
    )
};

export default App
