import * as React from 'react';
import './style.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Main from './components/Main/Main';


export default function App() {
  return (
    <div className="grid-container">
      <Sidebar className="sidebar"/>
      <Header className="header"/>
      <Main className="main"/>
    </div>
  );
}
