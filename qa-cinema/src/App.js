import './App.css';
import HomePage from './frontend/components/props/HomePage';
import NavBar from './frontend/components/props/navbar';
import Footer from './frontend/components/props/Footer';
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
