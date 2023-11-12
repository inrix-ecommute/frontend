import { createContext } from "react";

const RouteContext = createContext({
  route: {
    location: null,
    destination: null,
    routes: [],
  },
  loading: false,
  setRoutes: (route) => {},
  setDestination: (coords) => {},
  setLocation: (coords) => {},
  setLoading: (bool) => {},
});

export default RouteContext;
