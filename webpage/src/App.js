import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainDisplay from './components/DashBoard/MainDisplay'

function App() {
  return (
    <div className="App">
      <Header />
      <MainDisplay />
      <Footer />
    </div>
  );
}

export default App;
