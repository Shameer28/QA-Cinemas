import './App.css';
import HomePage from './frontend/components/props/HomePage';
import NavBar from './frontend/components/props/navbar';
import Footer from './frontend/components/props/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PurchaseManager from './frontend/components/props/PurchaseManager';
function App() {
  return (
    <div>
      <NavBar />
      <PurchaseManager />
      <Footer />
    </div>
  );
}

export default App;
