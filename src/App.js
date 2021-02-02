import './App.css';
import Navbar from "./components/nav"
import Aboutme from "./components/aboutme"
import Skillset from "./components/skillset"
import Projects from "./components/projects"
import Contactme from "./components/contact"
import Burger from "./components/myburger"
//import Burger from "./components/menu"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Burger/>
      <header className="App-header" id="top">
        <div className="frontpage">
          <h1 id="headline">Junior fullstack developer Ben Symons</h1>
          <img id="profilepic" alt="My profile" src = "/images/code background square.png"></img>
        </div>
      </header>
      <Aboutme/>
      <Skillset/>
      <Projects/>
      <Contactme/>
    </div>
  );
}

export default App;
