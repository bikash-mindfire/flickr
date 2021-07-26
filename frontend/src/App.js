import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './app.scss'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {

  const [sideBarShow, setSideBarShow] = useState(false);

  const handleSideBarShow = () => {
      setSideBarShow(prevSidebarState => !prevSidebarState);
  }

  return (
    <>
    <Router>
    <Switch>
      <Route path='/' exact>
      <Home />
      </Route>
      <Route path='/profile'>
        <Profile sideBarShow={sideBarShow} handleSideBarShow={handleSideBarShow} />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>
      </Router>
    </>
  )
}

export default App
