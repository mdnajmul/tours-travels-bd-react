import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddTourPackage from "./pages/AddTourPackage/AddTourPackage";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import BangladeshPackages from "./pages/BangladeshPackages/BangladeshPackages";
import BottomNav from "./pages/BottomNav/BottomNav";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import ManageTourPackages from "./pages/ManageTourPackages/ManageTourPackages";
import Register from "./pages/Register/Register";
import Shipping from "./pages/Shipping/Shipping";
import Slider from "./pages/Slider/Slider";
import TourDetails from "./pages/TourDetails/TourDetails";
import NotFound from "./pages/NotFound/NotFound";
import MyOrders from "./pages/MyOrders/MyOrders";
import IndiaPackages from "./pages/IndiaPackages/IndiaPackages";
import EuropePackages from "./pages/EuropePackages/EuropePackages";
import SpecialPackages from "./pages/SpecialPackages/SpecialPackages";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Summury from "./pages/Summury/Summury";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <BottomNav></BottomNav>
              <Slider></Slider>
              <BangladeshPackages></BangladeshPackages>
              <IndiaPackages></IndiaPackages>
              <EuropePackages></EuropePackages>
              <Summury></Summury>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
              <Header></Header>
              <BottomNav></BottomNav>
              <Slider></Slider>
              <BangladeshPackages></BangladeshPackages>
              <IndiaPackages></IndiaPackages>
              <EuropePackages></EuropePackages>
              <Summury></Summury>
              <Footer></Footer>
            </Route>
            <Route exact path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route exact path="/register">
              <Header></Header>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <Route exact path="/tourdetails/:tourId">
              <Header></Header>
              <TourDetails></TourDetails>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path="/shipping/:tourId">
              <Header></Header>
              <Shipping></Shipping>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/addtour">
              <Header></Header>
              <AddTourPackage></AddTourPackage>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/managetour">
              <Header></Header>
              <ManageTourPackages></ManageTourPackages>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <Header></Header>
              <ManageOrders></ManageOrders>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <Header></Header>
              <MyOrders></MyOrders>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/special">
              <Header></Header>
              <SpecialPackages></SpecialPackages>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/aboutus">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Header></Header>
              <Contact></Contact>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
