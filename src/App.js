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
import Gallery from './components/Gallery/Gallery';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateRoom from './components/Rooms/Room/PrivateRoom';
import MyBookings from './components/MyBookings/MyBookings';
import ManageAllRooms from './components/ManageAllRooms/ManageAllRooms';
import AddRoom from './components/AddRoom/AddRoom';
import UpdateRoom from './components/Rooms/UpdateRoom/UpdateRoom';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';
import UpdateBooking from './components/ManageAllBookings/UpdateBooking';

require( 'dotenv' ).config();


//all router, switch and routes
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
            <PrivateRoute exact path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllRooms">
              <ManageAllRooms></ManageAllRooms>
            </PrivateRoute>
            <PrivateRoute exact path="/addRoom">
              <AddRoom></AddRoom>
            </PrivateRoute>
            <PrivateRoute path="/rooms/update/:roomId">
              <UpdateRoom></UpdateRoom>
            </PrivateRoute>
            <PrivateRoute path="/bookings/update/:bookingId">
              <UpdateBooking></UpdateBooking>
            </PrivateRoute>
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
