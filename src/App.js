import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddTourPackage from "./pages/AddTourPackage/AddTourPackage";
import BangladeshPackages from "./pages/BangladeshPackages/BangladeshPackages";
import BottomNav from "./pages/BottomNav/BottomNav";
import Header from "./pages/Header/Header";
import Shipping from "./pages/Shipping/Shipping";
import Slider from "./pages/Slider/Slider";
import TourDetails from "./pages/TourDetails/TourDetails";

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
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
