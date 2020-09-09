import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./components/helpers/routes.json";
import React from "react";
import Home from "./components/home/home";
import store from "./components/redux/store";
import AdminProduct from "./components/administrator/product/product";
import AdminCategory from "./components/administrator/category/category";
import AdminUser from "./components/administrator/user/user";
import Login from "./components/auth/Login";
import Chart from "./components/order/chart";
import History from "./components/order/history";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.login} component={Login} />
          <Route
            exact
            path={routes.admin + routes.product}
            component={AdminProduct}
          />
          <Route
            exact
            path={routes.admin + routes.category}
            component={AdminCategory}
          />
          <Route
            exact
            path={routes.admin + routes.user}
            component={AdminUser}
          />
          <Route path={routes.chart} component={Chart} />
          <Route path={routes.history} component={History} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
