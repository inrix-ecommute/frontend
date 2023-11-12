import { GridItem as Gi } from "@chakra-ui/react";
import { MapContainer, TileLayer } from "react-leaflet";
import PlacesInput from "../PlacesInput/PlacesInput";
import RoutingMachine from "../Routes/RouteMachine";
import { useContext, useRef, useEffect } from "react";
import RouteContext from "../store/route-context";
export default function Map() {
  const {
    route: { location, destination },
  } = useContext(RouteContext);

  const rMac = useRef();

  const onGo = () => {
    if (!rMac.current) return;
    if (!location && !destination) return;
    rMac.current.setWaypoints([
      [location.lat, location.lng],
      [destination.lat, destination.lng],
    ]);
  };
  useEffect(() => {
    if (!rMac.current) return;
    if (!location && !destination) return;
    rMac.current.setWaypoints([
      [location.lat, location.lng],
      [destination.lat, destination.lng],
    ]);
  }, [rMac, location, destination]);

  return (
    <Gi pos="relative">
      <PlacesInput onGo={onGo} />
      <MapContainer
        center={[37.3489, -121.9368]}
        zoom={2}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJhbnptYXQiLCJhIjoiY2xvdW04MXRrMGp1czJscnpzZXRtMmUwNSJ9.wTAtrL3MSHI-wnLaPaLD_Q"
        />
        {location && destination && <RoutingMachine ref={rMac} />}
      </MapContainer>
    </Gi>
  );
}
