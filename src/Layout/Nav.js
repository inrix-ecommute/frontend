import {
  GridItem as Gi,
  Heading,
  IconButton,
  Flex,
  Image,
} from "@chakra-ui/react";
import Leaf from "../images/Leaf@3x.png";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Nav() {
  return (
    <Gi
      gridColumn="1 / -1"
      boxShadow="sm"
      zIndex={"1000"}
      as={Flex}
      p="1rem 3rem"
      alignItems="center"
    >
      <Heading color="brand.main" flex="1">
        ec
        <span display="inline-block">
          <Image
            src={Leaf}
            alt="logo"
            display="inline-block"
            boxSize="1.7rem"
            pos="relative"
            top="3.5px"
            left="0.7px"
          />
        </span>
        mmute
      </Heading>
      <IconButton
        variant="ghost"
        aria-label="menu"
        icon={<HamburgerIcon />}
        borderRadius="10px"
        fontSize="1.5rem"
        color="gray.600"
      />
    </Gi>
  );
}
