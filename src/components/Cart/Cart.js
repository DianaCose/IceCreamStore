import { Typography, Stack, Button, AppBar, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router";

function Cart({ onClose }) {
 const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        background: "#fff",
        textAlign: "center",
        maxWidth: "500px",
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          background: "#cfcfd4",
          height: "70px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "rgb(12, 11, 12, 0.8)", padding: "20px" }}
        >
          Cart Summary
        </Typography>
        <IconButton onClick={onClose}>
          <ClearIcon sx={{ color: "rgb(12, 11, 12, 0.8)" }} />
        </IconButton>
      </Stack>
      <Stack>
        <Typography
          variant="subtitle1"
          sx={{ color: "#0f0f0f", margin: "50px" }}
        >
          Your cart is empty.
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "#cfcfd4", color: "#0f0f0f", m: "50px" }}
          onClick={() => navigate("/")}
        >
          Back to store
        </Button>
      </Stack>
    </AppBar>
  );
}

export default Cart;
