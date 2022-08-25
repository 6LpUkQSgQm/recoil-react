import "./App.css";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { productState } from "./recoil/ProductRecoil";
import { useRecoilValue } from "recoil";

function App() {
  const products = useRecoilValue(productState);

  return (
    <>
      <Container sx={{ boxShadow: 2 }}>
        <Typography variant="h4">
          Simple shop with Recoil store and React
        </Typography>
        <Container>
          <TextField
            sx={{ m: 1 }}
            id="product-name"
            label="Enter the product name"
            variant="standard"
          />
          <TextField
            sx={{ m: 1 }}
            id="product-price"
            label="Enter the product price"
            variant="standard"
          />
          <TextField
            sx={{ m: 1 }}
            id="product-pic"
            label="Enter the product picture"
            variant="standard"
          />
        </Container>
        <Button variant="outlined" sx={{ m: 1 }}>
          Add a product
        </Button>
      </Container>
      <Container >
        <Grid sx={{ mt: 2 }} rowSpacing={1} container>
          {products.map((product) => (
            <Grid item lg={4} md={4} spacing={3}>
              <Box sx={{ p: 1, boxShadow: 2 }}>
                <Typography>{product.picture}</Typography>
                <Typography>{product.name}</Typography>
                <Typography>{product.price}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
