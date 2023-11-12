import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { LeafIcon } from "../icons/leafIcon";
import {
  Box,
  Heading,
  IconButton,
  Text,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
export default function RouteItemDetail({
  setOpen,
  ecoScore,
  fuelScore,
  speedScore,
  name,
  roadScore,
}) {
  return (
    <React.Fragment>
      <Box p="0 12.5px">
        <Box display="flex" alignItems="center" gap="3px">
          <IconButton
            as={ArrowBackIcon}
            variant="ghost"
            color="gray.600"
            size="sm"
            mr="1"
            onClick={() => setOpen()}
            cursor="pointer"
          />
          <Heading color="gray.600" fontSize="1.6rem">
            {name}
          </Heading>
        </Box>
        <Flex fontSize="xs" mt="13px" ml="5px" flexDir="column" gap="15.5px">
          <Text fontWeight="600" color="gray.600" fontSize="lg" mb="2px">
            Eco Score details
          </Text>
          <HStack>
            <Text flex="1">Fuel Economy</Text>
            <Text>{fuelScore.toFixed(0)}</Text>
            <Box
              width="45%"
              bg="gray.100"
              borderRadius="10px"
              overflow={"hidden"}
            >
              <Box
                bg="brand.main"
                width={`${fuelScore.toFixed(0)}%`}
                borderLeftRadius="10px"
                fontSize="9px"
              >
                &nbsp;
              </Box>
            </Box>
          </HStack>
          <HStack>
            <Text flex="1">Stop-and-Go Traffic</Text>{" "}
            <Text>{speedScore.toFixed(0)}</Text>
            <Box
              width="45%"
              bg="gray.100"
              borderRadius="10px"
              overflow={"hidden"}
            >
              <Box
                bg="brand.main"
                width={`${speedScore.toFixed(0)}%`}
                borderLeftRadius="10px"
                fontSize="9px"
              >
                &nbsp;
              </Box>
            </Box>
          </HStack>
          <HStack>
            <Text flex="1">Road Types</Text> <Text>{roadScore.toFixed(0)}</Text>
            <Box
              width="45%"
              bg="gray.100"
              borderRadius="10px"
              overflow="hidden"
            >
              <Box
                bg="brand.main"
                width={`${roadScore.toFixed(0)}%`}
                borderLeftRadius="10px"
                fontSize="9px"
              >
                &nbsp;
              </Box>
            </Box>
          </HStack>
          <Flex alignItems="center" gap="10px">
            <Flex
              mt="10px"
              bg="brand.main"
              alignSelf="flex-start"
              p="5px 10px"
              borderRadius="15px"
              alignItems="center"
            >
              <Icon as={LeafIcon} fill="#fff" boxSize="30px" />
              <Text fontWeight="600" ml="5px" fontSize="lg" color="#fff">
                {ecoScore.toFixed(0)}
              </Text>
            </Flex>
            <Text
              fontSize="lg"
              fontWeight="700"
              pos="relative"
              top="5px"
              ml="5px"
              color="brand.main"
            >
              Eco Score
            </Text>
          </Flex>
        </Flex>
      </Box>
    </React.Fragment>
  );
}
