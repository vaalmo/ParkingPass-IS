import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AccountContext } from "../AccountContext";
import * as Yup from "yup";
import TextField from "./TextField";
import { Text } from "@chakra-ui/react";

const Login = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Este campo es obligatorio!")
          .min(6, "Es muy corto para ser un id")
          .max(28, "Es muy largo para ser un id"),
        password: Yup.string()
          .required("Contraseña obligatoria!")
          .min(6, "Tu contraseña es muy corta")
          .max(28, "Tu contraseña es muy larga"),
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:4000/auth/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vals),
        })
        .catch(err => {
          return;
        })
        .then(res => {
          if (!res || !res.ok || res.status >= 400) {
            return;
          }
          return res.json();
        })
        .then(data => {
          if (!data) return;
          setUser({ ...data });
          if (data.status) {
            setError(data.status);
          } else if (data.loggedIn) {
            navigate("/dashboard");
          }
        });
    }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Iniciar Sesión</Heading>
        <Text as="p" color="red.500">
          {error}
        </Text>
        <TextField
          name="username"
          placeholder="Número de carnet o cédula"
          autoComplete="off"
          label="ID de Usuario"
        />

        <TextField
          name="password"
          placeholder="Contraseña"
          autoComplete="off"
          label="Contraseña"
          type="password"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Iniciar Sesión
          </Button>
          <Button onClick={() => navigate("/register")}>Crear cuenta</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;






