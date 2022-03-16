import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navber from './Pages/Navber/Navber';
import Notfound from './Pages/NotFound/Notfound';
import Purchese from './Pages/Purchese/Purchese';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AllProducts from './Pages/AllProducts/AllProducts';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import AddTestimonial from './Pages/AddTestimonial/AddTestimonial';
import AllPurchese from './Pages/AllPurchese/AllPurchese';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Navber></Navber>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/home">
            <Home></Home>
          </Route>
          |<Route path = "/login">
            <Login></Login>
          </Route>

          <Route path = "/allProducts">
            <AllProducts></AllProducts>
          </Route>

          <PrivateRoute path = "/purchese/:purcheseId">
             <Purchese></Purchese>
          </PrivateRoute>
          <PrivateRoute path = "/dashboard">
             <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path = "/addProduct">
           <AddProduct></AddProduct>
          </Route>

          <Route path = "/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>

          <Route path = "/addTestimonial">
            <AddTestimonial></AddTestimonial>
          </Route>

          <Route path = "/allPurchese">
            <AllPurchese></AllPurchese>
          </Route>

          <Route path = "*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
