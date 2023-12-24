// import { LogoDev } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { toggleSidebar } from "../store/sidebarSlice";
import { isMobile } from "../../ismobile";

const Navbar = () => {
  const dispatch = useDispatch();
  const { logout } = authActions;
  const logoutHandler = () => {
    dispatch(logout());
  };
  const showSidebar = useSelector((state) => state.sideBar.sidebarOpen);
  useEffect(() => {
    if (window.innerWidth >= 1200) {
      dispatch(toggleSidebar(true));
    }
  }, [dispatch]);
  return (
    <AppBar
      sx={{
        top: "0",
        right: "0",
        left: "0",
      }}
    >
      <Toolbar>
        <Typography variant="h4" noWrap sx={{ flexGrow: "1" }} component="div">
          Mail Box
        </Typography>

        <Button
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={logoutHandler}
        >
          LogOut
        </Button>
        {isMobile() && (
          <Button
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => dispatch(toggleSidebar(!showSidebar))}
          >
            {showSidebar ? "close" : "open drower"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
