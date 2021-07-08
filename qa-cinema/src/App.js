import './App.css';

import HomePage from './components/HomePage/HomePage';
import NavBar from './components/sharedcomponents/navbar';
import Footer from './components/sharedcomponents/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import AllGalleryPage from './components/AllGalleryPage/AllGalleryPage';
import OpeningTimesPage from './components/OpeningTimesPage/OpeningTimesPage';
import Classification from './components/ClassificationPage/Classification';
import PlacesToGo from './components/PlacesToGoPage/PlacesToGo';

import DiscussionBoard from './components/DiscussionPage/DiscussionBoard';
import ReviewAddPage from './components/DiscussionPage/ReviewAddPage';


import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import GettingThere from './components/GettingTherePage/GettingThere';

import 'bootstrap/dist/css/bootstrap.min.css';
import RecentMoviesPage from './components/RecentMoviePage/RecentMoviePage';
import Screen from './components/Screens/Screen';
import MoviePage from './components/MoviePage';
import PurchaseManager from './components/Bookings/PurchaseManager'
import Test from './components/ContactPage/Contact'
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
          <RecentMoviesPage />
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

        <Route path="/gettingthere">
          <GettingThere />
        </Route>

		<Route path="/reviews">
          <ReviewAddPage/>
        </Route>
        <Route path="/discussionboard">
          <DiscussionBoard />
        </Route>


        <Route path="/aboutpage">
          <AboutPage />
        </Route>

        <Route path="/contactpage">
          <ContactPage />
          {/* <Test/> */}
        </Route>
    
        <Route path="/ticketBookings">
           <Screen/>
         </Route>

        <Route path="/movieDetail/:id">
           <MoviePage url="http://localhost:3000/movies/get/"/>
         </Route>

        <Route path="/ticketbookings">
           <PurchaseManager/>
        </Route>
    
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;