import { HStack, Link as ChakraLink } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const PageLinks = () => {
  return (
    <HStack spacing="24px">
      <ChakraLink as={Link} to="/login" fontSize="xl">
        Iniciar Sesión
      </ChakraLink>
      <ChakraLink as={Link} to="/register" fontSize="xl">
        Registro
      </ChakraLink>
      <ChakraLink as={Link} to="/logout" fontSize="xl">
        Cerrar Sesión
      </ChakraLink>
    </HStack>
  );
};

export default PageLinks;