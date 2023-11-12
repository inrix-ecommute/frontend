import {
  ListItem as Li,
  Heading,
  UnorderedList as UOList,
  Text,
  Box,
} from "@chakra-ui/react";

export default function RouteItem() {
  return (
    <Li
      p="1rem 1.4rem"
      pos="relative"
      _notLast={{ borderBottom: "1px solid", borderColor: "gray.100" }}
    >
      <Heading color="#0f0f0f" fontSize="1.6rem">
        via Santa Clara
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
      >
        100
      </Box>
      <UOList fontSize="sm" mb="1">
        <Li>9 mins</Li>
        <Li>3.9km</Li>
      </UOList>
      <Text fontSize="xs" color="brand.main">
        View details
      </Text>
    </Li>
  );
}
