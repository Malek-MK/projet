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
import Media from '../imports/ui/Media';

function BlogPost() {
  let { id } = useParams();
}
const routes = (
  <Router >
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin/mediation" exact component={Media}/>
      <Authenticated path="/admin" component={Admin} />
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
