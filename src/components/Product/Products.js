import { Grid, Container, Typography } from "@mui/material";
import Product from "./Product";
import { Link } from "react-router-dom";


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
          <Grid item key={product.id}>
              <Link to={`/${product.name}`}><Product name={product.name} cardImage={product.cardImage} /> </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
