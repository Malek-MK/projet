import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Roles } from 'meteor/alanning:roles';

const Authenticated = ({ path, component }) => {

  const user = useTracker(() => Meteor.userId());
  const loading = useTracker(() => Meteor.loggingIn());
  const history = useHistory();
  const authenticatedPage = ["/admin","/mediations","/arbitrator","/home","/mediator"];
  const unAuthenticatedPage = [ "/signin", "/register"];
  const isAuthenticatedPage = authenticatedPage.includes(path);
  const isUnauthenticatedPage = unAuthenticatedPage.includes(path);

  useEffect(() => {
    if (!user  && isAuthenticatedPage) {
      history.replace("/signin");
    }
    if(user&&isAuthenticatedPage){
      if (Roles.userIsInRole(user, 'admin')) {
        history.push('/admin');
        console.log('admin login');
      }
      else if (Roles.userIsInRole(user, 'user')) {
        history.push('/mediations');
        console.log('user login');
      }
      else if (Roles.userIsInRole(user, 'arbitrator')) {
        history.push('/arbitrator');
        console.log('arbitrator login');
      }
      else if (Roles.userIsInRole(user, 'mediator')) {
        history.push('/mediator');
        console.log('mediator login');
      }
    }
    if(user&&isUnauthenticatedPage){
      if (Roles.userIsInRole(user, 'admin')) {
        history.push('/admin');
        console.log('admin login');
      }
      else if (Roles.userIsInRole(user, 'user')) {
        history.push('/mediations');
        console.log('user login');
      }
      else if (Roles.userIsInRole(user, 'arbitrator')) {
        history.push('/arbitrator');
        console.log('arbitrator login');
      }
      else if (Roles.userIsInRole(user, 'mediator')) {
        history.push('/mediator');
        console.log('mediator login');
      }
    }
  }, [user]);

  return loading ? (
<span><h3 className="text-center mt-5"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span></h3></span>

) : (
    <Route path={path} component={component} />
  );
};

export default Authenticated;