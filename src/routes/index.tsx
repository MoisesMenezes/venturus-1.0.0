import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import {CreateTeam} from "../pages/CreateTeam";


const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/teamcreate" component={CreateTeam} exact />
    </Switch>
  )
}

export default Routes;