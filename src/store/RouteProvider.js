import RouteContext from "./route-context";
import { useState } from "react";

const RouteProvider = ({ children }) => {
  const [destination, setDestination] = useState(null);
  const [location, setLocation] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const routeContext = {
    route: {
      destination,
      location,
      routes,
    },
    loading,
    setDestination,
    setLocation,
    setRoutes,
    setLoading,
  };

  return (
    <RouteContext.Provider value={routeContext}>
      {children}
    </RouteContext.Provider>
  );
};
export default RouteProvider;
