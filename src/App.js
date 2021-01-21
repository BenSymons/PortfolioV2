import './App.css';
import Pagedown from "./components/pagedown"
import Aboutme from "./components/aboutme"
import Skillset from "./components/Skillset"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Junior fullstack developer Ben Symons</h1>
        <img id="profilepic" alt="My profile" src = "/images/code background square.png"></img>
      <Pagedown />
      </header>
      <Aboutme/>
      <Skillset/>
    </div>
  );
}

export default App;
