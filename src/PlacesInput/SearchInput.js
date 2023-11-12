import { Fragment as Fr, useContext } from "react";
import {
  InputGroup,
  Text,
  Input,
  List,
  ListItem as Li,
} from "@chakra-ui/react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import RouteContext from "../store/route-context";
export default function SearchInput({ type, ...styles }) {
  const routeCtx = useContext(RouteContext);
  const {
    value,
    setValue,
    ready,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (e) => {
    if (!e.target.closest(".place-name")) return;
    const elName = e.target.closest(".place-name");
    setValue(elName.innerText.split(",")[0], false);
    clearSuggestions();
    const results = await getGeocode({ address: elName.innerText });
    const { lat, lng } = getLatLng(results[0]);
    type === "Location"
      ? routeCtx.setLocation({ desc: elName.innerText, lat, lng })
      : routeCtx.setDestination({ desc: elName.innerText, lat, lng });
  };
  return (
    <Fr>
      <InputGroup display="flex" flexDir="column" {...styles}>
        <Text
          as="label"
          htmlFor="location"
          fontSize="10px"
          color="brand.main"
          ml="11px"
        >
          {type === "Location" ? "From" : "To"}
        </Text>
        <Input
          placeholder={type}
          variant="ghost"
          id="location"
          autoComplete="off"
          fontSize="0.9rem"
          size="sm"
          borderRight={`${type === "Location" ? "1px" : "0px"} solid gray`}
          borderRadius="0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
        />
      </InputGroup>
      {status === "OK" && data.length && (
        <List
          pos="absolute"
          bg="white"
          top="135%"
          borderRadius="10px"
          boxShadow="xl"
          p="10px 20px"
          w="90%"
          left="50%"
          transform="translate(-50%,0)"
        >
          {data.map((el) => (
            <Li
              key={el.place_id}
              className="place-name"
              p="5px 10px"
              fontSize="sm"
              transition="all 0.2s ease-in-out"
              cursor="pointer"
              _notLast={{ borderBottom: "1px solid", borderColor: "gray.100" }}
              _hover={{ bg: "gray.100" }}
              onClick={handleSelect}
            >
              {el.description}
            </Li>
          ))}
        </List>
      )}
    </Fr>
  );
}
