import {
  ListItem as Li,
  Heading,
  UnorderedList as UOList,
  Text,
  Box,
  Icon,
} from "@chakra-ui/react";
import { LeafIcon } from "../icons/leafIcon";

export default function RouteItem({ name, distance, time, ecoScore, setOpen }) {
  return (
    <Li
      p="1rem 1.4rem"
      pos="relative"
      _notLast={{ borderBottom: "1px solid", borderColor: "gray.100" }}
    >
      <Heading color="#0f0f0f" fontSize="1.65rem" width="85%">
        {name}
      </Heading>
      <Box
        pos="absolute"
        top="12.5px"
        right="0"
        bg="brand.main"
        color="#fff"
        fontWeight="600"
        borderLeftRadius="10px"
        p="5px 10px"
        fontSize="lg"
        display="flex"
        alignItems="center"
      >
        <Icon as={LeafIcon} fill="#fff" mr="5px" />
        {ecoScore.toFixed(0)}
      </Box>
      <UOList fontSize="md" mb="1" spacing="1" mt={2}>
        <Li>{time} mins</Li>
        <Li>{distance} mi</Li>
      </UOList>
      <Text
        fontSize="sm"
        color="brand.main"
        onClick={() => setOpen()}
        cursor="pointer"
        mt="2"
      >
        View details
      </Text>
    </Li>
  );
}
