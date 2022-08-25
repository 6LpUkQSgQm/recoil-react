import React, { useState } from "react";
import shortid from "shortid";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import {
  productState,
  filteredProducts,
  searchTextState,
} from "./recoil/ProductRecoil";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const products = useRecoilValue(filteredProducts);
  const setProducts = useSetRecoilState(productState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const handleClick = () => {
    const new_product = {
      name,
      price,
      picture,
      id: shortid.generate(),
    };
    setProducts((oldProducts) => [new_product, ...oldProducts]);
  };
  return (
    <>
      <Container sx={{ mt: 2, textAlign: "center", p: 3, boxShadow: 2 }}>
        <Typography variant="h4">
          Simple shop with Recoil store and React
        </Typography>
        <Container>
            <TextField
              sx={{ m: 1 }}
              id="product-name"
              label="Enter the product name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              variant="standard"
            />
            <TextField
              sx={{ m: 1 }}
              id="product-price"
              label="Enter the product price"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              variant="standard"
            />
            <TextField
              sx={{ m: 1 }}
              id="product-pic"
              label="Enter the product picture"
              type="text"
              onChange={(e) => setPicture(e.target.value)}
              variant="standard"
            />
        </Container>
        <Button onClick={handleClick} variant="outlined" sx={{ m: 1 }}>
          Add a product
        </Button>
        <Divider />
        <TextField
          sx={{ mt: 2, mb: 2 }}
          id="filled-search"
          label="Search your product..."
          type="text"
          variant="standard"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Grid spacing={2} rowSpacing={2} container>
          {products.map((product, index) => (
            <Grid key={index} item lg={4} md={4}>
              <Box sx={{ p: 1, boxShadow: 2 }}>
                <Typography variant="h4">{product.picture}</Typography>
                <Typography>{product.name}</Typography>
                <Typography>
                  {product.price}
                  {"€/kg"}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
