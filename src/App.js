import logo from './logo.svg';
import './App.css';
import Section2 from './Section2'
import Click from './Click';
import profile from './profile_3.jpg'
import Example from './Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Hi, I'm Blard</p>
      <img src={profile} className="App-logo" alt="blardPic" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Frontend Web Developer </p>

        
        <a
          className="App-link"
          href="https://github.com/Blard-omu"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>

      </header>
      <Example/>
      <Section2/>
      <Click/>
    </div>
  );
}

export default App;
