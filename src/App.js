import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import './App.css';
import Home from './components/home/home'
import store from './components/redux/store';
import AdminProduct from './components/administrator/Product/AdminProduct';
import AdminCategory from './components/administrator/category/category';
import AdminUser from './components/administrator/user/user'
import Login from './components/auth/Login'
import History from './components/order/History'
function App() {
  return (
    <Provider store={store}>
      <Router> 
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/adminproduct" component={AdminProduct} />
          <Route exact path="/admin/category" component={AdminCategory} />
          <Route exact path="/admin/user" component={AdminUser} />
          <Route exact path="/history" component={History}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
