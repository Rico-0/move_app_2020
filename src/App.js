import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './router/About';
import Home from './router/Home'
import Navigation from './components/Navigation';
import Detail from './router/Detail';


// Link, Router 컴포넌트는 반드시 HashRouter 안에 포함되어야 한다.
// exact={true} 는 route 컴포넌트가 path props와 정확하게 일치하는 URL에만 반응하도록 만들어 준다.
function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/"exact={true} component = {Home}  />
      <Route path = "/about" component = {About} />
      <Route path = "/movie-detail" component = {Detail} />
    </HashRouter>
  );
}

export default App;
