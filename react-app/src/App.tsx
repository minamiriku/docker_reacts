import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import { ROUTE } from "./route/index";

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
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
      </Layout>
    </div>
  );
}

export default App;
