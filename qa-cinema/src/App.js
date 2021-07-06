import './App.css';
import HomePage from './frontend/components/props/HomePage';
import AllGalleryPage from './components/AllGalleryPage';
import NavBar from './frontend/components/props/navbar';
import Footer from './frontend/components/props/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
		<AllGalleryPage/>
      <Footer />
    </div>
  );
}

export default App;
