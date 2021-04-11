import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../imports/ui/Signup';
import Login from '../imports/ui/Login';
import User from '../imports/ui/User';
import Home from '../imports/ui/Home';
import Admin from '../imports/ui/Admin';
import Notfound from '../imports/ui/Notfound';
import Authenticated from '../imports/ui/Authenticated';
//import Authorized from '../imports/ui/Authorized';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Mediation from '../imports/ui/Mediation';
import NavCheck from '../imports/ui/NavCheck';

function BlogPost() {
  let { id } = useParams();
}
const routes = (
  <Router >
    <Switch>
    <Route path="/mediations/create" exact component={Mediation} />
    <Route path="/mediations/update" exact component={NavCheck} />
      <Route path="/" exact component={Home} />
      <Authenticated path="/mediations" exact component={Admin} />
      <Authenticated path="/signup"  component={Signup} />
      <Authenticated path="/signin"  component={Login} />
      <Authenticated path="/user"  component={User} />
      <Route path="*" component={Notfound} />
       
        <BlogPost />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
