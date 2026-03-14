/* eslint-disable no-unused-vars */
import "./App.css";
import "./components/Common/NavigationBar";
import "./index.css";
import SideNavigationBar from "./components/Admin/adminComponents/SideNavigationBar";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./components/Admin/adminRoutes/AdminRoutes";
import { Box } from "@mui/material";

function App() {
  const isSignIn = false;

  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        {isSignIn && <SideNavigationBar />}
        <AdminRoutes />
      </Router>
    </Box>
  );
}

export default App;
