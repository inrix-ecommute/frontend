import RouteContext from "./route-context";
import { useState } from "react";

const RouteProvider = ({ children }) => {
  const [destination, setDestination] = useState(null);
  const [location, setLocation] = useState(null);
  const [routes, setRoutes] = useState([]);

  const routeContext = {
    route: {
      destination,
      location,
      routes,
    },
    setDestination,
    setLocation,
    setRoutes,
  };

  return (
    <RouteContext.Provider value={routeContext}>
      {children}
    </RouteContext.Provider>
  );
};
export default RouteProvider;
