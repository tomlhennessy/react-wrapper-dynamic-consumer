import horoscopesObj from '../data/horoscopes';
import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Navbar = () => {
  const { setCurrentSign } = useContext(HoroscopeContext);
  console.log("Navbar component rendered");

  const horoscopes = Object.keys(horoscopesObj);

  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
        {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;
