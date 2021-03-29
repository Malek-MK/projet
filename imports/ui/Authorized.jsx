import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";

const Authorized = ({ path, component }) => {

  const user = useTracker(() => Meteor.user());
  const authenticatedPage = ["/user","admin"];
  const unAuthenticatedPage = ["/signin", "/signup"];
  const isAuthenticatedPage = authenticatedPage.includes(path);
  const isUnauthenticatedPage = unAuthenticatedPage.includes(path);
  const history = useHistory();

  useEffect(() => {
    if (user && isUnauthenticatedPage) {
      history.replace("/");
    } 
    else if (!user && isUnauthenticatedPage) {
      history.replace("/");
    }
  }, [user]);

  return <Route path={path} component={component} />;
};

export default Authorized;