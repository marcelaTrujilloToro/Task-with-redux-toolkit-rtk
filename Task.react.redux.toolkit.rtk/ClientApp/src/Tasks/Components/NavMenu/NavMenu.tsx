import React, { useContext, useState } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";
import ColorModeContext from "../../../contexts/ColorModeContext";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { useHistory } from "react-router";
import  DrawerLeft  from "../Drawer/Drawer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const NavMenu = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const history = useHistory();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const openMenuFn = () => {
    setOpenMenu(!openMenu);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
            <DrawerLeft open={openMenuFn} openMenu={openMenu}/>

          <Grid container>
            <Grid>
              <Typography
                color="inherit"
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1}}
                onClick={() => {
                  history.push("/");
                }}
              >
                TASK
              </Typography>

              <ButtonGroup
                variant="text"
                color="inherit"
                aria-label="text button group"
              >
                <Button
                  sx={{ display: { xs: "none", sm: "block" } }}
                  onClick={() => {
                    history.push("/createTask");
                  }}
                >
                  Create task
                </Button>
                <Button
                  sx={{ display: { xs: "none", sm: "block" } }}
                  onClick={() => {
                    history.push("/viewTasks");
                  }}
                >
                  View tasks
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            aria-label="change color mode"
            onClick={colorMode.toggleColorMode}
            sx={{ ml: "auto" }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
