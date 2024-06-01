import './App.css'
import {Order} from '../types';
import ramenImage from '../assets/ramen.png';
import kimchiImage from '../assets/kimchi.png';
import kimbapImage from '../assets/kimbap.png';
import tteokbokkiImage from '../assets/tteokbokki.png';
import mandooImage from '../assets/mandoo.png';
import bingsuImage from '../assets/bingsu.png';

export const ORDERS: Order[] = [
  {name: 'Ramen', price: 10, image: ramenImage},
  {name: 'Kimchi', price: 50, image: kimchiImage},
  {name: 'Kimbap', price: 80, image: kimbapImage},
  {name: 'Ttteokbokki', price: 60, image: tteokbokkiImage},
  {name: 'Mandoo', price: 80, image: mandooImage},
  {name: 'Bingsu', price: 60, image: bingsuImage},
];

const App = () => {

    return (
        <>

        </>
    )
};

export default App
