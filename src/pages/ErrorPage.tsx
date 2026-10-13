import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  let errr = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(errr)
            ? "This page does not exist"
            : "Unexpected error has occured."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
