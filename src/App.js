import logo from './logo.svg';
import './App.css';
import UserComponent from './Components/User'
import Profile from './Components/User/Profile'

function App() {
  const name="Jordany Angeles Neri"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA MUNDO
        </p>
  <p>Hecho por: {name}</p>
      </header>
      <UserComponent/>
      <Profile/>
    </div>
  );
}

export default App;
