import React, { useState } from "react";
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
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const { name } = useParams();
  const [flavorImage, setFlavorImage] = useState("");
  const [size, setSize] = useState("");

  return (
    <Container
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.products
        .filter((product) => product.name === name)
        .map((product) => {
          console.log("productDetails", product);
          console.log("ID Product", product.id);

          return (
            <Paper
              key={product.id}
              value={product.id}
              sx={{
                maxWidth: "360px",
                height: "100%",
                background: "rgb(12, 11, 12, 0.8)",
                marginTop: "20px",
              }}
            >
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  margin: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "cursive",
                    fontWeight: "bold",
                  }}
                >
                  {product.name}
                </Typography>
              </Stack>

              <Stack sx={{ margin: 3 }}>
                {flavorImage ? (
                  <img src={flavorImage.imageUrl} alt={product.name} />
                ) : (
                  <img src={product.cardImage} alt={product.name} />
                )}
              </Stack>

              <Stack sx={{ margin: "10px" }}>
                <FormControl variant="filled" sx={{ m: 1, background: "gray" }}>
                  <InputLabel id="iceCream" sx={{ color: "#fff" }}>
                    Size:
                  </InputLabel>
                  <Select
                    labelId="iceCream"
                    id="demo-simple-select"
                    label="Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    sx={{ color: "#fff" }}
                  >
                    {product.sizes.map((s) => (
                      <MenuItem key={s.size} value={s.size}>
                        {s.size}
                      </MenuItem>
                    ))}
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
                {product.flavors.map((flavor) => (
                  <Chip
                    key={flavor.name}
                    size="medium"
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      background: `${flavor.color}`,
                    }}
                    label={flavor.name}
                    value={flavor.imageUrl}
                    onClick={() => {
                      setFlavorImage(flavor);
                    }}
                  />
                ))}
              </Stack>
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                  padding: "5px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "rgb(233, 30, 99)", color: "#fff" }}
                >
                  Add to cart
                </Button>
              </Stack>
            </Paper>
          );
        })}
    </Container>
  );
}

export default ProductDetail;
