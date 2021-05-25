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
import ManageArbitrators from '../imports/ui/ManageArbitrators';
import Arbitrator from '../imports/ui/Arbitrator';
import FAQ from '../imports/ui/FAQ';
import MediatorFunctionalities from '../imports/ui/MediatorFunctionalities';
import TariffsMediators from '../imports/ui/TariffsMediators';
import Contact from '../imports/ui/Contact';
import WhatIsMediation from '../imports/ui/WhatIsMediation';
import WhatIsArbitration from '../imports/ui/WhatIsArbitration';
import ClausesMediationArbitration from '../imports/ui/ClausesMediationArbitration';
import Blog from '../imports/ui/Blog';
import Mediators from '../imports/ui/Mediators';
import NewVersion from '../imports/ui/NewVersion';
import PrivacyPolicy from '../imports/ui/PrivacyPolicy';
import TermsAndConditions from '../imports/ui/TermsAndConditions';
import LegalNotice from '../imports/ui/LegalNotice';
import OurCodeOfEthics from '../imports/ui/OurCodeOfEthics';
import ManageUsers from '../imports/ui/ManageUsers';
import ManageMediations from '../imports/ui/ManageMediations';
import Profile from '../imports/ui/Profile';
import RegisterMediator from '../imports/ui/RegisterMediator';
import Mediator from '../imports/ui/Mediator';
import MediatorMediation from '../imports/ui/MediatorMediation';
import Subscription from '../imports/ui/Subscription';
import ManageMediators from '../imports/ui/ManageMediators';
import ProfileMediator from '../imports/ui/ProfileMediator';
import ProfileAdmin from '../imports/ui/ProfileAdmin';
import ProfileArbitrator from '../imports/ui/ProfileArbitrator'; 
import MediatorMediations from '../imports/ui/MediatorMediations';
function BlogPost() {
  let { id } = useParams();
}
const routes = (
  <Router >
    <Switch>
    <Route path="/manageMediations" exact component={ManageMediations} /> 
    <Route path="/manageMediators" exact component={ManageMediators} /> 
    <Route path="/profile" exact component={Profile} /> 
    <Route path="/profile_arbitrator" exact component={ProfileArbitrator} /> 
    <Route path="/profile_admin" exact component={ProfileAdmin} /> 
    <Route path="/profile_mediator" exact component={ProfileMediator} /> 
    <Route path="/subscriptions/pricing" exact component={Subscription} /> 
    <Route path="/manageUsers" exact component={ManageUsers} /> 
    <Route path="/mediations/create" exact component={Mediation} /> 
    <Route path="/mediator/create_mediation" exact component={MediatorMediation} /> 
    <Route path="/our-code-of-ethics" exact component={OurCodeOfEthics} /> 
    <Route path="/legal-notice" exact component={LegalNotice} /> 
    <Route path="/terms-and-conditions" exact component={TermsAndConditions} /> 
    <Route path="/privacy-policy" exact component={PrivacyPolicy} /> 
    <Route path="/new-version-of-community" exact component={NewVersion} /> 
    <Route path="/mediators" exact component={Mediators} /> 
    <Route path="/blog" exact component={Blog} /> 
    <Route path="/clauses-mediation-arbitration" exact component={ClausesMediationArbitration} /> 
    <Route path="/what-is-arbitration" exact component={WhatIsArbitration} /> 
    <Route path="/what-is-mediation" exact component={WhatIsMediation} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/tariffs-mediators" exact component={TariffsMediators} />
    <Route path="/mediator-functionalities" exact component={MediatorFunctionalities} />
    <Route path="/mediations/update/:id" exact component={NavCheck} />
    <Route path="/manageArbitrators" exact component={ManageArbitrators}/>
    <Authenticated path="/arbitrator" exact component={Arbitrator}/>
    <Authenticated path="/mediator" exact component={Mediator}/>
    <Route path="/faq" exact component={FAQ}/>
    <Route path="/about" exact component={About}/>
    <Route path="/prices" exact component={Prices}/>
    <Route path="/features" exact component={Features}/>
    <Route path="/details-business-offer" exact component={OfferDetails}/>
    <Route path="/details-offer-mediators" exact component={OfferDetailsMed}/>
      <Route path="/home" exact component={Home} />
      <Authenticated path="/mediations" exact component={User} />
      <Authenticated path="/mediator/mediations" exact component={MediatorMediations} />
      <Authenticated path="/register_mediator"  component={RegisterMediator} />
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
