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
            <Typography sx={{ p: "2" }}>Contact</Typography>

            <Typography sx={{ p: "2" }}>0742 87 15 76</Typography>
          </Stack>
        </Grid>
        <Grid item sdx={{ marginRight: "5px" }}>
          <Typography>About us</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
