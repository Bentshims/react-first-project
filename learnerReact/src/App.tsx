// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/header'
import Footer from './components/footer'
import Form from './components/forms'
import Faqs from './components/faqs'
import Prices from './components/prices'
import './App.css'
function App() {
  return (
    <>
      <Header />
      <Faqs />
      <Prices />
      <Form />
      <Footer />
    </>
  )
}

export default App
