import React from 'react'
import app from './app.module.css'
import Content from './components/Content'
import Header from './components/Header'
import Nav from './components/Nav'
const App = () => {
  return (
    <div className={app[ 'app-wrapper' ]}>
      <Header />
      <Nav />
      <Content />

    </div >

  );
}


export default App;
