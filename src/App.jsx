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
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const handleActive = (whatActive) => {
    (whatActive === 'available') ? setActive('available') : setActive('selected')
  }

  const handleChoose = player => {
    const updatedSelected = [...selected, player];
    setSelected(updatedSelected);
    if (credit > 0) {
      const amount = Number(player.price.split('$').join('').split(',').join(''));
      const updatedCredit = credit - amount;
      setCredit(updatedCredit);
    }
  }

  const handleUnselect = player => {
    const updatedSelected = selected.filter(SelectedPlayer => SelectedPlayer !== player);
    setSelected(updatedSelected);
  }

  const handleCredit = () => {
    const updatedCredit = credit + 50000000;
    setCredit(updatedCredit);
  }

  return (
    <div className='sora'>
      <div className="max-w-screen-xl mx-auto w-4/5">
        <Header credit={credit}></Header>
        <Banner handleCredit={handleCredit}></Banner>
        <Toggler active={active} handleActive={handleActive} selected={selected} players={players}></Toggler>
        {
          (active === 'available') ? <Players players={players} handleChoose={handleChoose}></Players> : <Selected selected={selected} handleUnselect={handleUnselect} handleActive={handleActive}></Selected>
        }
      </div>
    </div>
  )
}

export default App
