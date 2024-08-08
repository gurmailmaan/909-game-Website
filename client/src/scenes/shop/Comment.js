import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { userData } from "../authentication/helper";
import { Button} from "reactstrap";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "../../styles/Comment.css";
import { BASE_URL } from "../../utils/base";
import { KEY } from "../../utils/key";

const initialForm = { message: "", rating: "" };
const Comment = () => {
  const [comment, setComment] = useState(initialForm);
  
  const writeComment = async () => {
      try {
        const url = `${BASE_URL}/api/reviews`;

        const { username } = userData();
        console.log(`This is ${username}`);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const dateNow = new Date(Date.now()).toLocaleString("en-GB", options);
  
        const headers = {
          Authorization:`Bearer ${KEY}`
        };
        if(!username){
          toast.success(" Please Login to Comment", {
            hideProgressBar: true,
          })
        }else{
          if (comment.message !== "" || comment.rating !== "") {
            const res = await axios.post(
              url,
              {
                data: {
                  message: comment.message,
                  rating: comment.rating,
                  username: username,
                  date: dateNow,
                },
              },
              { headers }
            );

            if (!!res) {
              toast.success("Commented successfully!", {
                hideProgressBar: true,
              });
              setComment(initialForm);
              //   navigate("/login");
              console.log(`Hello the ${dateNow}`);
            }
          }else{
            toast.success(" Both comment and rating need to be selected", {
              hideProgressBar: true,
            })
          }
        }
      } catch (error) {
        toast.error("There was some problem. Please try again later", {
          hideProgressBar: true,
        });
      }
    
    // window.location.reload(false);
    // dispatch(forceupdate())

  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setComment((currentComment) => ({
      ...currentComment,
      [name]: value,
    }));
  };

  

  return (
    <Box width="90%" m="0 auto" mt="40px">
      <Typography variant="h2" mb="20px">
        Customer Reviews
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="baseline"
        flexWrap="wrap"
        width="100%"
        className="comment-box"
      >
        <Box display="flex" flexDirection="column" gap="1rem" className="comment-input" width="100%">
          <input
            type="text"
            name="message"
            value={comment.message}
            onChange={handleUserChange}
            placeholder="Write A Review"
          />
          <select type="select" name="rating" value={comment.rating}
            onChange={handleUserChange}
            placeholder="rating">
            <option>1</option>
            <option>2</option>
            <option selected="selected">3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </Box>
        <Box className="btn-submit">
          <Button color="primary"  onClick={writeComment} width="20%">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Comment;
