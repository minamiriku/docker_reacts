import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { ROUTE } from "./route/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {ROUTE.map((li, i) => {
            return li.display ? (
              <Route
                key={i}
                path={li.path}
                exact={li.exact}
                component={li.component}
              />
            ) : null;
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
