import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, VStack, Text} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import TextField from "./TextField";
import { AccountContext } from "../AccountContext";
import { useState, useContext } from "react";

const SignUp = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "",usertype: "", name: "", surname: "", email: "", password: ""}}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Este campo es obligatorio!")
          .min(6, "ID muy corto!")
          .max(28, "ID muy largo!"),
        usertype: Yup.string()
          .required("Este campo es obligatorio!")
          .min(6, "Debe ser miembro o visitante!")
          .max(28, "Debe ser miembro o visitante!"),
        name: Yup.string()
          .required("Este campo es obligatorio!")
          .min(6, ".")
          .max(28, "."),
        surname: Yup.string()
          .required("Este campo es obligatorio!")
          .min(6, ".")
          .max(28, "."),
        email: Yup.string()
          .required("Este campo es obligatorio!")
          .min(6, ".")
          .max(28, "."),
        password: Yup.string()
          .required("Este campo es obligatorio!")
          .min(6, "Contraseña muy corta!")
          .max(28, "Contraseña muy larga!"),
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch("http://localhost:4000/auth/register", {
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
        <Heading>Crear Cuenta</Heading>
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
          name="usertype"
          placeholder="Miembro o visitante"
          autoComplete="off"
          label="Tipo de usuario"
        />

        <TextField
          name="name"
          placeholder="Primer nombre"
          autoComplete="off"
          label="Nombre"
        />

        <TextField
          name="surname"
          placeholder="Primer apellido"
          autoComplete="off"
          label="Apellido"
        />

        <TextField
          name="email"
          placeholder="Personal o institucional"
          autoComplete="off"
          label="Correo"
        />

        <TextField
          name="password"
          placeholder="Contraseña"
          autoComplete="off"
          label="Contraseña"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Crear Cuenta
          </Button>
          <Button onClick={() => navigate("/login")} leftIcon={<ArrowBackIcon />}>
            Atrás
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default SignUp;
