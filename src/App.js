import { Spinner } from "@chakra-ui/react";
import { Fragment as Fr } from "react";
import "leaflet/dist/leaflet.css";
import "./app.css";
import Routes from "./Routes/Routes";
import Map from "./Map.js/Map";
import { useLoadScript } from "@react-google-maps/api";
import { REACT_APP_GOOGLE } from "./keys";
const libraries = ["places"];
function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE,
    libraries,
  });

  if (!isLoaded) return <Spinner />;
  return (
    <Fr>
      <Routes />
      <Map />
    </Fr>
  );
}

export default App;
