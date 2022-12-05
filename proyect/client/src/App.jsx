import { useState } from 'react'

import reactLogo from './assets/react.svg'

import { Navbar, Loader, Welcome, Services, Transactions, Footer } from './components/index'

import './App.css'

const App = () => {

  return (
    <div className="min-h-screen">

      <div className='gradient-bg-welcome'>
        <Navbar />
        <Loader />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />

    </div>
  )
}

export default App
