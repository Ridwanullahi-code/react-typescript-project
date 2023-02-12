import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  to: string;
}
export default function DenseAppBar({title, to}:Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{gap:5 ,padding:1}}>
          <NavLink
            to={to}
            style={{ color: "white" }}>
            <Typography variant="h6" color="inherit" component="div">
              {title}
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
