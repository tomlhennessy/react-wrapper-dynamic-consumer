import { useState, useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Match = () => {
    const [match, setMatch] = useState(false);
    const { sign } = useContext(HoroscopeContext);
    console.log("Match component re-rendered");

    return (
        <div>
            <button onClick={() => setMatch(prev => !prev)}>
                {match ? "Hide Match" : "Show Match"}
            </button>
            {match && <div>{sign.match}</div>}
        </div>
    )
}

export default Match;
