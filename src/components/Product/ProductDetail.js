import React from "react";
import {
  Paper,
  Container,
  Typography,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ProductDetail() {
  return (
    <Container
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Paper
        sx={{
          maxWidth: "360px",
          height: "100%",
          background: "rgb(12, 11, 12, 0.8)",
          marginTop: "10px",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            margin:"20px"
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "cursive", fontWeight:"bold", padding: "10px" }}
          >
            Ice Cream
          </Typography>
        </Stack>
        <Stack>
          <img
            src="../images/ice-cream.svg"
            alt="ice-cream"
            sx={{ padding: "10px" }}
          />
        </Stack>
        <Stack sx={{ margin: "10px" }}>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120, background: "gray", }}>
            <InputLabel id="iceCream" sx={{ color: "#fff",  }}>
              Size:
            </InputLabel>
            <Select
              labelId="iceCream"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Small</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>Large</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Typography sx={{ textAlign: "center", color: "#fff" }}>
          Select your flavor:
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ margin: "10px", justifyContent: "center" }}
        >
          <Chip
            sx={{
              backgroundColor: "rgb(90, 24, 142)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
            label="prune"
          />
          <Chip
            sx={{
              backgroundColor: "rgb(248, 133, 50)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
            label="squash"
          />
          <Chip
            sx={{
              backgroundColor: "rgb(233, 30, 99)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
            label="cherry"
          />
        </Stack>
        <Stack sx={{justifyContent: "center", alignItems:"center", margin:"10px", padding:"5px"}}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(233, 30, 99)", color: "#fff" }}
          >
            Add to cart
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default ProductDetail;
