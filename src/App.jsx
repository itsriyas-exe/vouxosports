import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import MatchDetails from './components/MatchDetails'
import PlayerActivity from './components/PlayerActivity'
import Notifications from './pages/Notifications'
import News from './pages/News'
import NotFound from './components/NotFound'
import Premium from './components/Premium'
function App() {

  return (
    <>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/home' element={<Dashboard/>}/>
      <Route path='/details' element={<MatchDetails/>}/>
      <Route path='/watch' element={<PlayerActivity/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/plans' element={<Premium/>}/>
      </Routes>

    </>
  )
}

export default App
