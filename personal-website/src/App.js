import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [hovered, setHover] = React.useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          James Pearce!
        </h1>
        <div className="socials">
          <div className="instagram">instagram</div>
          <div className="facebook">facebook</div>
          <div className="linkedin">linkedin</div>
        </div>
      </header>
      <div className>
      </div>
    </div>
  );
}

export default App;
