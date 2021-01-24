import './App.css';
import Navbar from "./components/nav"
import Aboutme from "./components/aboutme"
import Skillset from "./components/Skillset"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div class="frontpage">
          <h1>Junior fullstack developer Ben Symons</h1>
          <img id="profilepic" alt="My profile" src = "/images/code background square.png"></img>
        </div>
      </header>
      <Aboutme />
      <Skillset/>
    </div>
  );
}

export default App;
