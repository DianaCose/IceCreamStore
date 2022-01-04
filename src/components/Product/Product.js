import { Typography, Paper } from "@mui/material";

function Product(props) {
  return (
      <Paper
        sx={{
          maxWidth: "360px",
          height: "100%",
          padding: "15px",
          margin: "10px",
          background: "#FDF6EB",
          cursor: "pointer",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: "5px",
            marginLeft: "5px",
            // textDecorationLine:"none"
          }}
        >
          {props.name}
        </Typography>
        <img src={props.cardImage} alt="ice-cream" sx={{ padding: "10px" }} />
      </Paper>
  );
}
export default Product;
