import { Box } from "@chakra-ui/react";
import { Fragment as Fr, useContext, useState } from "react";
import RouteContext from "../store/route-context";
import RouteItem from "./RouteItem";
import RouteItemDetail from "./RouteItemDetail";
export default function RouteItemPage() {
  const {
    route: { routes },
  } = useContext(RouteContext);
  const [open, setOpen] = useState(false);
  return (
    <Fr>
      <Box p="20px 0">
        {!open &&
          routes.length &&
          routes.map((route, i) => (
            <RouteItem
              name={route.name}
              time={route.time}
              distance={route.distance}
              ecoScore={route.ecoScore}
              setOpen={() => setOpen(i + 1)}
              key={i}
            />
          ))}
        {open && (
          <RouteItemDetail
            setOpen={() => setOpen(false)}
            ecoScore={routes[open - 1].ecoScore}
            name={routes[open - 1].name}
            speedScore={routes[open - 1].speedScore}
            fuelScore={routes[open - 1].fuelScore}
            roadScore={routes[open - 1].roadScore}
          />
        )}
      </Box>
    </Fr>
  );
}
