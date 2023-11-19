import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "./Drawer";

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"55px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <SwipeableTemporaryDrawer />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              Home
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
