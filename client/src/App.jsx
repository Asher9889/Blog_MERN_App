import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, DashBoard, About } from "./pages";
import { Header, Footer } from "./components"
import './App.css';

function App() {


  return (
    <div className=''>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
