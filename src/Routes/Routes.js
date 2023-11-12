import { GridItem as Gi, List, Spinner, Center } from "@chakra-ui/react";

import RouteItemPage from "./RouteItemPage";
import { useContext } from "react";
import RouteContext from "../store/route-context";
export default function Routes() {
  const {
    route: { routes },
    loading,
  } = useContext(RouteContext);

  return (
    <Gi>
      {!!routes.length && (
        <List width="22.5rem" p={"0.1rem 0rem"}>
          {loading ? (
            <Center p="5rem">
              <Spinner color="brand.main" size="xl" />
            </Center>
          ) : (
            <RouteItemPage />
          )}
        </List>
      )}
    </Gi>
  );
}
