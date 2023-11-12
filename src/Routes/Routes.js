import {
  GridItem as Gi,
  List,
  ListItem as Li,
  Heading,
  Text,
} from "@chakra-ui/react";
import RouteItem from "./RouteItem";
import RouteItemPage from "./RouteItemPage";
export default function Routes() {
  return (
    <Gi>
      <List width="20rem" p={"0.2rem 0rem"}>
        <RouteItemPage />
      </List>
    </Gi>
  );
}
