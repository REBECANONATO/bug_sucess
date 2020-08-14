import React from 'react';
import Bug1 from './assets/img/400-1.svg';
import Bug2 from './assets/img/400-2.svg';
import Bug3 from './assets/img/404-1.svg';
import Bug4 from './assets/img/404-2.svg';
import Bug5 from './assets/img/no-data.svg';
import Success from './assets/img/Successful.svg';
import './App.css';

function App() {
  const isNoDev = false;

  if (!isNoDev) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;

  return (
    <div></div>
  );
}

function UserGreeting(props) {
  return (
    <div className="App">
      <header className="App-header" id="container">
        <img src={Bug1} className="App-logo " alt="logo" />
        <img src={Bug2} className="App-logo "  alt="logo" />
        <img src={Bug3} className="App-logo " alt="logo" />
        <img src={Bug4} className="App-logo " alt="logo" />
        <img src={Bug5} className="App-logo " alt="logo" />
        <p>
          Bug <b>Bug</b> Muitos Bugs.
        </p>
      </header>
    </div>  
    );
}

function GuestGreeting(props) {
  return (
<div className="App">
      <header className="App-header">
        <img src={Success} className="App-logo " alt="logo" />
        <p>
          <b>Success</b>
        </p>
      </header>
    </div>  

  );
}


export default App;
