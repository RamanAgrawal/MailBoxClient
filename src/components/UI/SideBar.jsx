import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "@mui/material";
import { isMobile } from "../../ismobile";
import { toggleSidebar } from "../store/sidebarSlice";

const navItems = [
  {
    to: "/",
    text: "Inbox",
    icon: <MailIcon sx={{ color: "white" }} />,
  },
  {
    to: "/sent",
    text: "SentBox",
    icon: <MarkEmailReadIcon sx={{ color: "white" }} />,
  },
  {
    to: "/send",
    text: "Compose Email",
    icon: <SendIcon sx={{ color: "white" }} />,
  },
  {
    to: "/bin",
    text: "Recycle Bin",
    icon: <DeleteForeverIcon sx={{ color: "white" }} />,
  },
];

const SideBar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.sideBar.sidebarOpen);
  const totalUnread = useSelector((state) => state.mailBox.totalUnread);

  const handleClick = () => {
    isMobile() && dispatch(toggleSidebar(false));
  };
  return (
    <Box
      sx={{
        width: "20rem",
        height: "95vh",
        bgcolor: "rgb(0,0,0, 1)",
        position: "fixed",
        transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        top: 0,
        left: 0,
        bottom: 0,
        mt: "2rem",
        zIndex:"1000"
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ color: "white" }}>
          <ListItem></ListItem>

          <ListItem>
            <ListItemText primary="" />
          </ListItem>
          <Divider />

          <Box sx={{ position: "fixed", left: "1rem", zIndex: "10" }}>
            <Badge badgeContent={totalUnread} color="primary" />
          </Box>

          {navItems.map((item) => {
            return (
              <Box key={Math.random()}>
                <ListItem onClick={handleClick}>
                  <ListItemButton component={NavLink} to={item.to}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </nav>

      <Box
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          p: "1rem 2rem",
        }}
      ></Box>
      <div class="outer">
        <div class="inner"></div>
      </div>
    </Box>
  );
};

export default SideBar;
