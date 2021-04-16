import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";

const Authenticated = ({ path, component }) => {

  const user = useTracker(() => Meteor.userId());
  const loading = useTracker(() => Meteor.loggingIn());
  const history = useHistory();
  const authenticatedPage = ["/user","/admin"];
  const unAuthenticatedPage = [ "/signin", "/signup"];
  const isAuthenticatedPage = authenticatedPage.includes(path);
  const isUnauthenticatedPage = unAuthenticatedPage.includes(path);

  useEffect(() => {
    if ((!user  && isAuthenticatedPage)||(user&&isUnauthenticatedPage)) {
      history.replace("/");
    }
  }, [user]);

  return loading ? (
<span><h3><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span></h3></span>

) : (
    <Route path={path} component={component} />
  );
};

export default Authenticated;