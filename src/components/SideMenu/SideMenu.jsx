import React from "react";
import "./SideMenu.scss";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  styled,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const SideMenu = (props) => {
  const { MenuItem, isOpen, handleDrawerClose } = props;

  return (
    <div className="SideMenu">
      <Drawer sx={styleDrawer} variant="persistent" anchor="left" open={isOpen}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <KeyboardBackspaceIcon fontSize="large" />
          </IconButton>
        </DrawerHeader>
        <List sx={styleMenuList}>
          {MenuItem?.map((element, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton style={{ padding: "2rem" }}>
                {element?.item_icon && (
                  <ListItemIcon>{element?.item_icon}</ListItemIcon>
                )}
                <Typography variant="h4">{element?.item_name}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;

const styleDrawer = {
  width: "100%",
  height: "100%",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    background: "#E1DCFF",
    borderRadius: "1rem",
  },
};

const styleMenuList = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1rem",
  fontSize: "2.5rem",
  overflowY: "scroll",
  padding: "1.5rem",
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
