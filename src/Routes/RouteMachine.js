import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import icon from "../icons/defIcon";

const createRoutineMachineLayer = ({ waypoints }) => {
  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: "#56BB55", weight: 7 }],
    },
    altLineOptions: {
      styles: [
        { color: "#32703C", weight: 7 },
        { color: "#32703C", weight: 7 },
        { color: "#32703C", weight: 7 },
      ],
    },
    router: L.Routing.mapbox(
      "pk.eyJ1IjoiZnJhbnptYXQiLCJhIjoiY2xvdW04MXRrMGp1czJscnpzZXRtMmUwNSJ9.wTAtrL3MSHI-wnLaPaLD_Q"
    ),
    show: false,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: true,
    addWaypoints: false,
    draggableWaypoints: false,
    plan: L.Routing.plan(waypoints, {
      createMarker: function (i, wp) {
        return L.marker(wp.latLng, {
          draggable: true,
          icon,
        });
      },
    }),
  });
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);
export default RoutingMachine;
