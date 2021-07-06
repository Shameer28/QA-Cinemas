import './App.css';

import HomePage from './components/HomePage';
import NavBar from './components/props/navbar';
import Footer from './components/props/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import AllGalleryPage from './components/AllGalleryPage';
import OpeningTimesPage from './components/OpeningTimesPage';
import Classification from './components/Classification';
import PlacesToGo from './components/PlacesToGo';
import DiscussionBoard from './components/DiscussionBoard';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentMoviesPage from './components/RecentMoviePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/nowshowing">
          <AllGalleryPage />
        </Route>

        <Route path="/newreleases">
			<RecentMoviesPage/>
		</Route>

        <Route path="/openingtimes">
          <OpeningTimesPage />
        </Route>

        <Route path="/classification">
          <Classification />
        </Route>

        <Route path="/placestogo">
          <PlacesToGo />
        </Route>
        {/* 
        <Route path="/gettingthere"> //HAARIS

        </Route> */}

        <Route path="/discussionboard">
          <DiscussionBoard />
        </Route>

        <Route path="/aboutpage">
          <AboutPage />
        </Route>

        <Route path="/contactpage">
          <ContactPage />
        </Route>

        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;