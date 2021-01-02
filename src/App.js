import './App.css';
import './components/header.css';
import './components/dashboard.css';
import './Asserts/bootstrap.min.css';
import './components/tabelview.css';
import Header from './components/header';
import DashBoard from './components/dashboard'


function App() {
  return (
    <div className="App">
      <Header />
      <DashBoard />
    </div>
  );
}

export default App;
