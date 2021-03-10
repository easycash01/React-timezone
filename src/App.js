import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='Titolo'>prima app in react</h1>
      <br/>
      <Clock timezone="0" country="Italia" />
      <Clock timezone="2" country="russia"/>
      <Clock timezone="7" country="cina"/>
      <Clock timezone="-6" country="america"/>
    </div>
  );
}

export default App;
