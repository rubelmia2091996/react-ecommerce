import logo from './logo.svg';
import './App.css';
import Rubel from './components/Hello';
import Welcome from './components/ClassComponent';
import RubelUseState from './components/useState';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Rubel/> 
        {/* <Welcome/> */}
        <RubelUseState/>
      </header>
    </div>
  );
}

export default App;
