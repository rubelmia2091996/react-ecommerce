import logo from './logo.svg';
import './App.css';
import Rubel from './components/Hello';
import Welcome from './components/ClassComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Rubel/>
        <Welcome name="Bangladesh" area="50"/>
        <Welcome name="INDIA" area="60"/>
        <Welcome name="USA" area="70"/>
        <Welcome name="RUSSIA" area="80"/>
        
      </header>
    </div>
  );
}

export default App;
