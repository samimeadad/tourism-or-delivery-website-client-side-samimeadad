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
import Gallery from './components/Gallery/Gallery';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateRoom from './components/Rooms/Room/PrivateRoom';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MyBookings from './components/MyBookings/MyBookings';
import ManageBookings from './components/ManageBookings/ManageBookings';
require( 'dotenv' ).config();

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
            <PrivateRoute exact path="/room/:roomId">
              <PrivateRoom></PrivateRoom>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/manageBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <Route exact path="/facilities">
              <Facilities></Facilities>
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
