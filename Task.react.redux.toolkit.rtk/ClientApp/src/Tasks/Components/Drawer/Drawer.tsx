import React  from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
interface DrawerProps {
  open: (openMenu: boolean) => void;
  openMenu: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  toolbar: theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerLeft: React.FC<DrawerProps> = (props) => {
  const history = useHistory();

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
        onClick={() => {
          props.open(true);
        }}
      >
        <MenuIcon color="inherit" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={props.openMenu}
        onClose={() => {
          props.open(false);
        }}
        onOpen={() => {
          props.open(true);
        }}
      >
        <DrawerHeader>
          <IconButton
            onClick={() => {
              props.open(false);
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText
              primary="Create task"
              onClick={() => {
                history.push("/createTask");
              }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="View tasks"
              onClick={() => {
                history.push("/viewTasks");
              }}
            />
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
    </div>
  );
};

export default DrawerLeft;
