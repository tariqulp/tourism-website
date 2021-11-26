import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import AuthProvider from './component/context/AuthProvider';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import Services from './component/Services/Services';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Order from './component/Order/Order';
import ManageAllOrders from './component/ManageAllOrders/ManageAllOrders';
import MyOrders from './component/MyOrders/MyOrders';
import AddService from './component/AddService/AddService';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/orders/:serviceId'>
              <Order />
            </PrivateRoute>
            <PrivateRoute path='/manage'>
              <ManageAllOrders />
            </PrivateRoute>
            <PrivateRoute path='/myorder'>
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path='/addservice'>
              <AddService />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
