import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Selected from './components/Selected/Selected'
import Players from './components/Players/Players'
import { useEffect, useState } from "react";

function App() {

  const [active, setActive] = useState('available');
  // const [selected, setSelected] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
      fetch('players.json')
          .then(res => res.json())
          .then(data => setPlayers(data));
  }, []);

  const handleActive = (whatActive) => {
    (whatActive === 'available') ? setActive('available') : setActive('selected')
  }

  return (
    <div className='sora'>
      <div className="max-w-screen-xl mx-auto w-4/5">
        <Header></Header>
        <Banner></Banner>
        <div className="flex justify-between my-5 items-center">
          <h3 className="text-xl font-semibold">Available Players</h3>
          <div className="flex rounded-xl border cursor-pointer">
            <p onClick={() => handleActive('available')} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} className={(active === 'available') ? "activeBg font-semibold w-36 px-7 p-2 hover:font-bold" : "w-36 px-7 p-2 hover:font-bold hover:bg-gray-100"}>Available</p>
            <p onClick={() => handleActive('selected')} style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} className={(active === 'selected') ? "activeBg font-semibold w-36 px-7 p-2 hover:font-bold" : "w-36 px-7 p-2 hover:font-bold hover:bg-gray-100"}>Selected(0)</p>
          </div>
        </div>
        {
          (active === 'available') ? <Players players={players}></Players> : <Selected></Selected>
        }
      </div>
    </div>
  )
}

export default App
