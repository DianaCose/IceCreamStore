import { Grid, Stack, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Grid
        container
        height="50px"
        width="100%"
        position="fixed"
        bottom="0"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          backgroundColor: "#2e2b2e",
          color: "#fff",
          padding: "10px",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Grid item xs={8}>
          <Stack direction="row" spacing={3}>
            <Typography sx={{ paddingLeft: "2px", fontFamily:"cursive" }}>"You can't buy happiness, but you can buy ice cream, and that is pretty much the same thing."</Typography>
          </Stack>
        </Grid>
        <Grid item sdx={{ marginRight: "5px" }}>
          <Typography>Contact us</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
