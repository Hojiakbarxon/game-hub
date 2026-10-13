import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

function Layout() {
  return (
    <Box  padding={5}>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
