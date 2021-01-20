import './App.css';
import Pagedown from "./components/pagedown"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Junior fullstack developer Ben Symons</p>
        <img id="profilepic" alt="My profile" src = "/images/code background square.png"></img>
      </header>
      <Pagedown />
      <p>other content</p>
    </div>
  );
}

export default App;
