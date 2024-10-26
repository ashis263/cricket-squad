import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Selected from './components/Selected/Selected'
import Players from './components/Players/Players'
import { useEffect, useState } from "react";
import Toggler from './components/Toggler/Toggler'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'


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
    const amount = Number(player.price.split('$').join('').split(',').join(''));
    if (selected.length < 6) {
      if (credit >= amount) {
        if (!selected.includes(player)) {
          toast.success(`Congrats! ${player.name} have been choosen for Squad.`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          const updatedSelected = [...selected, player];
          setSelected(updatedSelected);
          if (credit > 0) {
            const updatedCredit = credit - amount;
            setCredit(updatedCredit);
          }
        } else {
          toast.error(`${player.name} already been choosen for squad!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        }
      } else {
        toast.error('Insufficient Coins! Claim credit to continue choosing.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      }
    } else {
      toast.error('Squad is full, cannot choose more player!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }

  const handleUnselect = player => {
    toast.warn(`${player.name} have been removed from squad!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    const updatedSelected = selected.filter(SelectedPlayer => SelectedPlayer !== player);
    setSelected(updatedSelected);
  }

  const handleCredit = () => {
    toast.success('Succesfully claimed credit of $60000000.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    const updatedCredit = credit + 60000000;
    setCredit(updatedCredit);
  }

  return (
    <div className='sora'>
      <div className="max-w-screen-xl mx-auto w-4/5">
        <Header credit={credit}></Header>
        <Banner handleCredit={handleCredit}></Banner>
        <Toggler active={active} handleActive={handleActive} selected={selected}></Toggler>
        {
          (active === 'available') ? <Players players={players} handleChoose={handleChoose}></Players> : <Selected selected={selected} handleUnselect={handleUnselect} handleActive={handleActive}></Selected>
        }
        <Newsletter></Newsletter>
      </div>
      <Footer className="max-w-screen-xl mx-auto"></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
