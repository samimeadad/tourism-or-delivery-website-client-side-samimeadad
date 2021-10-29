import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Facilities from './components/Facilities/Facilities';
import Restaurants from './components/Restaurants/Restaurants';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import AuthProvider from './context/AuthProvider';

function App () {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/rooms">
              <Rooms></Rooms>
            </Route>
            <Route exact path="/facilities">
              <Facilities></Facilities>
            </Route>
            <Route exact path="/restaurants">
              <Restaurants></Restaurants>
            </Route>
            <Route exact path="/events">
              <Events></Events>
            </Route>
            <Route exact path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
