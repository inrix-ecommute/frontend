import { createContext } from "react";

const RouteContext = createContext({
  route: {
    location: null,
    destination: null,
    routes: [],
  },
  setRoutes: (route) => {},
  setDestination: (coords) => {},
  setLocation: (coords) => {},
});

export default RouteContext;
