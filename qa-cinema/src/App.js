import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import NavBar from './frontend/components/props/navbar';
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
