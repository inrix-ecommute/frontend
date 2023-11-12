import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Fragment as Fr } from "react";
import "leaflet/dist/leaflet.css";
import "./app.css";
import Routes from "./Routes/Routes";
import Map from "./Map.js/Map";
import { useLoadScript } from "@react-google-maps/api";
const libraries = ["places"];
function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAlSmUi_jB3y7cW3FwAAu46-GpuqrBr-kM",
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
