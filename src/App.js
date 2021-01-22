import './App.css';
import Navbar from "./components/nav"
import Aboutme from "./components/aboutme"
import Skillset from "./components/Skillset"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <div class="frontpage">
          <h1>Junior fullstack developer Ben Symons</h1>
          <img id="profilepic" alt="My profile" src = "/images/code background square.png"></img>
        </div>
      </header>
      <Aboutme title="aboutme"/>
      <Skillset/>
    </div>
  );
}

export default App;
