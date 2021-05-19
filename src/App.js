import React from 'react'
import { Route } from 'react-router'
import app from './app.module.css'
// import Content from './components/Content/Content'
import Dialogs from './components/Content/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div className={app[ 'app-wrapper' ]}>
        <Header />
        <Nav />
        <div className={app[ 'app-wrapper-content' ]}>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Content} />
          {/* <Dialogs /> */}
          {/* <Content /> */}
        </div>
      </div >
    </BrowserRouter>

  );
}


export default App;
