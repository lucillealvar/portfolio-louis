import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path='/projects/:index' element={<ProjectsPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
