import "./App.css";
/* import { useState } from "react"; */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
/* import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop"; */

// Screens
import HomePage from "./screens/HomePage";
/* import HomeScreen from "./screens/HomeScreen"; */
import ShopPage from "./screens/ShopPage";
import ShopPageByType from "./screens/ShopPageByType";
import ShopPageByTitle from "./screens/ShopPageByTitle";
import CreatePost from "./screens/CreatePost";
import Contact from "./screens/ContactPage";
// import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import DetailPage from "./screens/DetailPage";
import CheckoutPage from "./screens/CheckoutPage";

function App() {
 /*  const [sideToggle, setSideToggle] = useState(false); */

  return (
    <Router>
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/search/:type" component={ShopPageByType} />
          <Route exact path="/search/title/:title" component={ShopPageByTitle} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/product/:id" component={DetailPage} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
