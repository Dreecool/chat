import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'


const PrivateRoute = ({ element }) => {

  const authToken = Cookies.get("authToken");

  if(authToken) {

    return element

  } else {

    return <Navigate to="/"/>

  }

};

export default PrivateRoute;