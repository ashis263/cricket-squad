import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Selected from './components/Selected/Selected'
import Players from './components/Players/Players'
import { useEffect, useState } from "react";
import Toggler from './components/Toggler/Toggler'

function App() {

  const [active, setActive] = useState('available');
  const [selected, setSelected] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const handleActive = (whatActive) => {
    (whatActive === 'available') ? setActive('available') : setActive('selected')
  }

  const handleChoose = name => {
    const updatedSelected = [...selected, name];
    setSelected(updatedSelected);
  }

  const handleUnselect = player => {
    const updatedSelected = selected.filter(SelectedPlayer => SelectedPlayer !== player);
    setSelected(updatedSelected);
  }

  return (
    <div className='sora'>
      <div className="max-w-screen-xl mx-auto w-4/5">
        <Header></Header>
        <Banner></Banner>
        <Toggler active={active} handleActive={handleActive} selected={selected} players={players}></Toggler>
        {
          (active === 'available') ? <Players players={players} handleChoose={handleChoose}></Players> : <Selected selected={selected} handleUnselect={handleUnselect}></Selected>
        }
      </div>
    </div>
  )
}

export default App
