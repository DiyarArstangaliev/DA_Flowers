import React from 'react';
import './App.css';
import Header from './components/header';
import NavBar from "./components/navBar";
import MyPosts from "./components/profile";

const App = () => {
  return (
    <div className="page">
      <Header />
      <div className="app-wrapper">
        <NavBar />
        <MyPosts />
      </div>
    </div>
  );
}

export default App;
