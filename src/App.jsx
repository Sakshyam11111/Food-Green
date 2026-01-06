import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About';
import BlogPost from './components/BlogPost';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App