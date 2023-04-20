import { useState } from 'react'
import { Aside } from './components/aside/Aside'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import './App.css'

function App() {
  const [asideActive, setAsideActive] = useState(true);

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        {asideActive && <Aside />}
        <Main />
      </div>
    </div>
  )
}

export default App
