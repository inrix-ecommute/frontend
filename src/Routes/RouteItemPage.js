import {
  Box,
  Heading,
  IconButton,
  Text,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { Fragment as Fr } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { LeafIcon } from "../icons/leafIcon";
export default function RouteItemPage() {
  return (
    <Fr>
      <Box p="20px 12.5px">
        <Box display="flex" alignItems="center" gap="3px">
          <IconButton
            as={ArrowBackIcon}
            variant="ghost"
            color="gray.600"
            size="sm"
            mr="1"
          />
          <Heading color="gray.600" fontSize="1.6rem">
            via Santa Clara
          </Heading>
        </Box>
        <Flex fontSize="xs" mt="13px" ml="5px" flexDir="column" gap="12.5px">
          <Text fontWeight="600" color="gray.600" fontSize="lg" mb="2px">
            Eco Score details
          </Text>
          <HStack>
            <Text flex="1">Road Elevation</Text> <Text>00</Text>
            <Box width="45%" bg="gray.100" borderRadius="10px">
              <Box
                bg="brand.main"
                width="70%"
                borderLeftRadius="10px"
                fontSize="9px"
              >
                &nbsp;
              </Box>
            </Box>
          </HStack>
          <HStack>
            <Text flex="1">Gas Consumption</Text> <Text>00</Text>
            <Box width="45%" bg="gray.100" borderRadius="10px">
              <Box
                bg="brand.main"
                width="70%"
                borderLeftRadius="10px"
                fontSize="9px"
              >
                &nbsp;
              </Box>
            </Box>
          </HStack>
          <HStack>
            <Text flex="1">Stop-and-Go Traffic</Text> <Text>00</Text>
            <Box width="45%" bg="gray.100" borderRadius="10px">
              <Box
                bg="brand.main"
                width="70%"
                borderLeftRadius="10px"
                fontSize="9px"
              >
                &nbsp;
              </Box>
            </Box>
          </HStack>
          <HStack>
            <Text flex="1">Road Types</Text> <Text>00</Text>
            <Box width="45%" bg="gray.100" borderRadius="10px">
              <Box
                bg="brand.main"
                width="70%"
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
              bg="gray.100"
              alignSelf="flex-start"
              p="5px 10px"
              borderRadius="15px"
              alignItems="center"
            >
              <Icon as={LeafIcon} fill="gray.700" boxSize="30px" />
              <Text fontWeight="600" ml="5px" fontSize="lg">
                70
              </Text>
            </Flex>
            <Text
              fontSize="lg"
              fontWeight="700"
              color="gray.600"
              pos="relative"
              top="5px"
              ml="5px"
            >
              Average Score
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Fr>
  );
}
