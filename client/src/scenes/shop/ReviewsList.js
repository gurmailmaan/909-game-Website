import React, { useEffect} from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../state";
import "../../styles/global.css";
import { BASE_URL } from "../../utils/base";
import { KEY } from "../../utils/key";

import Reviews from "./Reviews";

const ReviewsList = () => {

const dispatch = useDispatch();

const reviews = useSelector((state) => state.cart.reviews);
  async function getReviews() {
    const reviews = await fetch(
      `${BASE_URL}/api/reviews`,
      {
        headers: {
          Authorization: `Bearer ${KEY}`
        }
      }
    );
    const reviewssJson = await reviews.json();
    dispatch(setReviews(reviewssJson.data))
  }

  useEffect(() => {
    getReviews()
  });

  return (
    <Box width="90%" margin="40px auto" id="reviews-list">
      <Typography variant="h2" textAlign="left" mb="20px">
        Top Reviews
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 600px)"
        gap="1.5rem"
        className="reviews-box"
      >
        {
            [...reviews].reverse().map((review)=>{
                return(
                    <Reviews  review={review} key={`${review.username}-${review.id}`}/>
                )
            })
        }
      </Box>
    </Box>
  );
};

export default ReviewsList;
