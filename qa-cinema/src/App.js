import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/props/navbar';
import Footer from './components/props/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
