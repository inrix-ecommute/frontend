import { Grid } from "@chakra-ui/react";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <Grid
      h="100vh"
      templateColumns="min-content 1fr"
      templateRows="min-content 1fr"
    >
      <Nav />
      {children}
    </Grid>
  );
}
