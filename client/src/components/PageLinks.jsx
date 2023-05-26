import { Link as ChakraLink, HStack } from "@chakra-ui/layout";
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
      <ChakraLink as={Link} to="/tarjeta" fontSize="xl">
        Agregar tarjeta
      </ChakraLink>
      <ChakraLink as={Link} to="/parqueadero" fontSize="xl">
        Parqueadero
      </ChakraLink>
      <ChakraLink as={Link} to="/qrcode" fontSize="xl">
        Codigo QR
      </ChakraLink>
    </HStack>
  );
};

export default PageLinks;