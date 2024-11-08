import { useState } from 'react'
import Header from "./components/header/Header"
import Main from './components/Main1/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="section">
        <video className='video' loop autoPlay muted >
          <source src="public/video/video.mp4" type="" />
        </video>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App
