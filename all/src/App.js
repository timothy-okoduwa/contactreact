import Forthetwo from "./Header/Forthetwo";
import Homepage from "./Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BusinessContact from "./BusinessContact/BusinessContact";
import Familycontact from "./Familycontact/Familycontact";
import Friendcontact from "./Friendcontact/Friendcontact";
import PrivateContact from "./PrivateContact/PrivateContact";
import Addcontact from "./Addcontacts/Addcontact";
import SignupPage from "./SignupPage/SignupPage";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthProvider";
import TheCreator from "./TheCreator/TheCreator";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Forthetwo />

        <Switch>
          <PrivateRoute path="/" exact component={Homepage} />
          <PrivateRoute path="/Addcontact" component={Addcontact} />
          <PrivateRoute path="/BusinessContact" component={BusinessContact} />
          <PrivateRoute path="/Familycontact" component={Familycontact} />
          <PrivateRoute path="/Friendcontact" component={Friendcontact} />
          <PrivateRoute path="/PrivateContact" component={PrivateContact} />
          <PrivateRoute path="/TheCreator" component={TheCreator} />

          <Route path="/SignupPage" component={SignupPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
