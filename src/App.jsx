import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='sora'>
      <div className="max-w-screen-xl mx-auto w-4/5">
        <Header></Header>
        <Banner></Banner>
      </div>
    </div>
  )
}

export default App
