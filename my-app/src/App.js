import logo from './logo.svg';
import './App.css';


const Header = () => {
  return (
    <div className="header">
      <a>HOME</a>
      <a>FEED</a>
      <a>CONTACT</a>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <ul>
          <li>css</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
    </div>
  )
}

export default App;
