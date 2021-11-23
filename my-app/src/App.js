import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Nav from './Nav';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
