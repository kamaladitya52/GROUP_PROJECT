import Login from './components/Login'
import Register from './components/Register'
import Lobby from './components/Lobby'
import VideoCall from './components/VideoCall'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App'>  
        <Router>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/join-meeting' element={<Lobby />}/>
            <Route path='/video-call' element={<VideoCall />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
