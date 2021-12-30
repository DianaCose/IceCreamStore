import { Grid, Container, Typography } from "@mui/material";
import Product from "./Product";

function Products(props) {
  return (
    <Container component="div" sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontFamily: "cursive", padding: "5px" }}>
        Infinite Summer Ice Cream Store
      </Typography>
      <Typography variant="h5" sx={{ fontFamily: "Raleway", padding: "5px" }}>
        Which one do you want?
      </Typography>
      <Grid container sx={{ justifyContent: "center" }}>
        {props.products.map((product) => (
          <Grid item>
            <Product name={product.name} cardImage={product.cardImage} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
