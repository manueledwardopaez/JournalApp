/* eslint-disable react/prop-types */
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined></MenuOutlined>
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Typography variant="h6" component="div">
            Journal App
          </Typography>

          <IconButton color="error">
            <LogoutOutlined></LogoutOutlined>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
