import { GridItem as Gi } from "@chakra-ui/react";
import { MapContainer, TileLayer } from "react-leaflet";
import PlacesInput from "../PlacesInput/PlacesInput";
import RoutingMachine from "../Routes/RouteMachine";
import { useContext, useRef, useEffect, useState } from "react";
import RouteContext from "../store/route-context";
import { REACT_APP_MAPBOX } from "../keys";
export default function Map() {
  const {
    route: { location, destination },
    setRoutes,
    setLoading,
  } = useContext(RouteContext);
  const [on, setOn] = useState(1);
  const rMac = useRef();

  const onGo = async () => {
    if (!rMac.current) return;
    if (!location && !destination) return;
    rMac.current.setWaypoints([
      [location.lat, location.lng],
      [destination.lat, destination.lng],
    ]);
    const handleAPI = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/getData?location=${location.lat},${location.lng}&destination=${destination.lat},${destination.lng}`
        );
        const data = await res.json();
        console.log(data.data);
        setRoutes(Object.values(data.data));
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(true);
    await handleAPI();
    setLoading(false);
  };

  useEffect(() => {
    if (!rMac.current) return;
    if (!location || !destination) return;
    if (!on) return;
    rMac.current.setWaypoints([
      [location.lat, location.lng],
      [destination.lat, destination.lng],
    ]);
    setOn(0);
    const handleAPI = async () => {
      console.log(location, destination);
      try {
        const res = await fetch(
          `http://localhost:8000/getData?location=${location.lat},${location.lng}&destination=${destination.lat},${destination.lng}`
        );
        const data = await res.json();
        setRoutes(Object.values(data.data));
      } catch (err) {
        console.log(err);
      }
    };
    handleAPI();
  }, [rMac, location, destination, on, setOn, setRoutes]);

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
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${REACT_APP_MAPBOX}`}
        />
        {location && destination && <RoutingMachine ref={rMac} />}
      </MapContainer>
    </Gi>
  );
}
