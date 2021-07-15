import Googlesign from "./Screen/Googlesign";
import Home from "./Screen/Home";
import Layout from "./Screen/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contactfrom from "./Screen/Contactfrom";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Googlesign} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/ContactUs" component={Contactfrom} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
