import { Box, Input, InputGroup, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import SearchInput from "./SearchInput";
import RouteContext from "../store/route-context";
export default function PlacesInput({ onGo }) {
  const {
    route: { location, destination },
  } = useContext(RouteContext);

  return (
    <Box
      zIndex="1000"
      pos="absolute"
      top={location && destination ? "-0.5%" : "40%"}
      left="50%"
      transform={"translate(-50%,-50%)"}
      border={location && destination && "1px solid"}
      borderColor="brand.light"
      display="flex"
      bg="white"
      alignItems="center"
      padding="0.5rem 0.8rem"
      borderRadius="40px"
      boxShadow="md"
      transition="0.2s ease-out"
      sx={
        !location &&
        !destination && {
          "&:focus-within": {
            transform: "translate(-50%,-60%)",
            boxShadow: "lg",
          },
        }
      }
    >
      {(!location || !destination) && (
        <Text
          pos="absolute"
          top="-55%"
          width="max-content"
          left="50%"
          transform="translate(-50%,0)"
          color="brand.dark"
          fontWeight="700"
          p="3px 6px"
          borderRadius="30px"
          mb="2px"
        >
          Commute with the earth in mind. Find an eco-friendly route here.
        </Text>
      )}
      <SearchInput type="Location" />
      <SearchInput type="Destination" ml={1} />
      <Button
        background="color.brand"
        bg="brand.main"
        color="white"
        borderRadius="40px"
        onClick={onGo}
      >
        Go
      </Button>
    </Box>
  );
}
