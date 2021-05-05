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
import About from '../imports/ui/About';
import OfferDetails from '../imports/ui/OfferDetails';
import OfferDetailsMed from '../imports/ui/OfferDetailsMed';
import Features from '../imports/ui/Features';
import Prices from '../imports/ui/Prices';
import HomeAdmin from '../imports/ui/HomeAdmin';
import ManageArbitrators from '../imports/ui/ManageArbitrators';
import CreateArbitrator from '../imports/ui/CreateArbitrator';
import Arbitrator from '../imports/ui/Arbitrator';
import HomeArbitrator from '../imports/ui/HomeArbitrator';
import FAQ from '../imports/ui/FAQ';
function BlogPost() {
  let { id } = useParams();
}
const routes = (
  <Router >
    <Switch>
    <Route path="/mediations/create" exact component={Mediation} />
    <Route path="/mediations/update/:id" exact component={NavCheck} />
    <Route path="/manageArbitrators" exact component={ManageArbitrators}/>
    <Route path="/createArbitrator" exact component={CreateArbitrator}/>
    <Route path="/arbitrator" exact component={Arbitrator}/>
    <Route path="/faq" exact component={FAQ}/>
    <Route path="/about" exact component={About}/>
    <Route path="/prices" exact component={Prices}/>
    <Route path="/features" exact component={Features}/>
    <Route path="/details-business-offer" exact component={OfferDetails}/>
    <Route path="/details-offer-mediators" exact component={OfferDetailsMed}/>
      <Route path="/" exact component={Home} />
      <Route path="/homeAdmin" exact component={HomeAdmin} />
      <Route path="/homeArbitrator" exact component={HomeArbitrator} />
      <Authenticated path="/mediations" exact component={User} />
      <Authenticated path="/signup"  component={Signup} />
      <Authenticated path="/signin"  component={Login} />
      <Authenticated path="/admin"  component={Admin} />
      <Route path="*" component={Notfound} />
       
        <BlogPost />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
