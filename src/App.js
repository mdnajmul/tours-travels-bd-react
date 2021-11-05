import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import BottomNav from "./pages/BottomNav/BottomNav";
import Header from "./pages/Header/Header";
import Slider from "./pages/Slider/Slider";

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
            </Route>
            <Route exact path="/home">
              <Header></Header>
              <BottomNav></BottomNav>
              <Slider></Slider>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
