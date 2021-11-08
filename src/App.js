import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddTourPackage from "./pages/AddTourPackage/AddTourPackage";
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
            </Route>
            <Route exact path="/home">
              <Header></Header>
              <BottomNav></BottomNav>
              <Slider></Slider>
              <BangladeshPackages></BangladeshPackages>
            </Route>
            <Route exact path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Header></Header>
              <Register></Register>
            </Route>
            <Route exact path="/tourdetails/:tourId">
              <Header></Header>
              <TourDetails></TourDetails>
            </Route>
            <Route exact path="/shipping/:tourId">
              <Header></Header>
              <Shipping></Shipping>
            </Route>
            <Route exact path="/addtour">
              <Header></Header>
              <AddTourPackage></AddTourPackage>
            </Route>
            <Route exact path="/managetour">
              <Header></Header>
              <ManageTourPackages></ManageTourPackages>
            </Route>
            <Route exact path="/manageorders">
              <Header></Header>
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path="/myorders">
              <Header></Header>
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
