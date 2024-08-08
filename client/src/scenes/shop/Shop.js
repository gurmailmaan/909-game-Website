import { Box, Button, Typography } from "@mui/material";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../state";
import "../../styles/global.css";
import "../../styles/Shop.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MainCarousel from "./MainCarousel";
import ReviewsList from "./ReviewsList";
import Comment from "./Comment";
import { BASE_URL } from "../../utils/base";
import { KEY } from "../../utils/key";
import ProductInfo from "./ProductInfo";
import ProductPros from "./ProductPros";
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';

const Shop = () => {
  const dispatch = useDispatch();
  const [count] = useState(1);
  const [item, setItem] = useState(null);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  
  async function getItem() {
    const item = await fetch(
      `${BASE_URL}/api/items/1?populate=image`,
      {headers: {
        Authorization: `Bearer ${KEY}`
      }}
  );   
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Box>
      <Box width="90%" m="0 auto" >
      <Typography variant="h2" mb="20px" mt="20px">Shop 9on9 game</Typography>
        <div className="shop-banner">
          <h2>Guaranteed Fun with<br/><span>9on9 Board Game</span> </h2>
        </div>
        
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* Images */}
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={item?.name}
              width="100%"
              height="100%"
              src={`${BASE_URL}${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              style={{ objectFit: "fill" }}
            />
          </Box>
          {/* actions */}
          <Box flex="1 1 50%" mb="40px">
            <Box m="0px 0 25px 0">
              <Typography variant="h2">{item?.attributes?.name}</Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                columnGap="1.33%"
                justifyContent="space-between"
                m="5px 0px"
                className="leaf-icon"
              >
                <Typography variant="p">Sold By Jalfam Games</Typography>
                <Typography variant="p">Eco-friendly <EnergySavingsLeafOutlinedIcon/></Typography>
              </Box>
              <Typography variant="p" className="link-reviews"><a href="#reviews-list">See All Reviews</a></Typography>
              
              <Typography variant="h3" m="5px 0px">
                ${item?.attributes?.price}<sup>&#43;GST</sup>
              </Typography>
              <Typography sx={{ mt: "20px" }}>
                {item?.attributes?.longDescription}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              minHeight="50px"
              gap="1rem"
              className="shop-button"
            >
              <Button
                sx={{
                    backgroundColor: "#041E42",
                    color: "white",
                    borderRadius:"5px",
                    minWidth: "150px",
                    padding: "15px 100px",
                    '&:hover': {
                      backgroundColor: 'green',
                    },
                    width:"50%"
                }}
                
                onClick={() =>
                  dispatch(addToCart({ item: { ...item, count } }))

                }
              >
                ADD TO CART
              </Button>

              <Button
                sx={{
                  backgroundColor: "#D1683B",
                  color: "white",
                  borderRadius:"5px",
                  minWidth: "150px",
                  padding: "15px 100px",
                  '&:hover': {
                    backgroundColor: '#BC4123',
                  },
                  width:"50%"

                }}
                onClick={() => dispatch(setIsCartOpen({}))}
              >
                VIEW CART
              </Button>
            </Box>
            <Box>
              <Box m="20px 0 5px 0" display="flex">
                <LocalShippingOutlinedIcon />
                <Typography sx={{ ml: "5px" }}>
                  Free delievery in Edmonton
                </Typography>
              </Box>
              <Typography>In Stock</Typography>
            </Box>
          </Box>
        </Box>
        {/* Information */}
        {/* <Box m="20px 0">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="DESCRIPTION" value="description" />
            <Tab label="REVIEWS" value="reviews" />
          </Tabs>
        </Box> */}
        {/* <Box display="flex" flexWrap="wrap" gap="15px" mb="20px">
          {value === "description" && (
            <div>{item?.attributes?.longDescription}</div>
          )}
        </Box> */}
      </Box>
      <ProductInfo/>
      <MainCarousel/>
      <ProductPros/>
      <Comment/>
      <ReviewsList/>
    </Box>
  );
};

export default Shop;
