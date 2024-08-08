import { Box,Button, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { setIsAuthOpen} from "../../state";
import { useNavigate } from "react-router-dom";

import { userData } from "../authentication/helper";
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const { username } = userData();


  const AuthMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthOpen = useSelector((state) => state.cart.isAuthOpen);

  return (
    <Box
      display={isAuthOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="p">Account</Typography>
            <IconButton onClick={() => dispatch(setIsAuthOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>
          {
            (!username)?
            <Box >
              <Button
                  sx={{
                    backgroundColor: "#D1683B",
                    color: "white",
                    borderRadius:"5px",
                    minWidth: "100%",
                    padding: "20px 40px",
                    m: "20px 0",
                    '&:hover': {
                      backgroundColor: '#BC4123',
                    },
                  }}
                  onClick={() => {
                    navigate("/login");
                    dispatch(setIsAuthOpen({}));
                  }}
                >
                  Login
                </Button>
                <Typography variant="h3" textAlign="center">OR</Typography>
                <Button
                  sx={{
                    backgroundColor: "#041E42",
                    color: "white",
                    borderRadius:"5px",
                    
                    '&:hover': {
                      backgroundColor: 'green',
                    },
                    minWidth: "100%",
                    padding: "20px 40px",
                    m: "20px 0",
                  }}
                  onClick={() => {
                    navigate("/signup");
                    dispatch(setIsAuthOpen({}));
                  }}
                >
                  Signup
                </Button> 
            </Box>
            :
            <Box>
              <Typography>Welcome {username}</Typography>
              <Button
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: 0,
                    minWidth: "100%",
                    padding: "20px 40px",
                    m: "20px 0",
                  }}
                  onClick={() => {
                    navigate("/logout");
                    dispatch(setIsAuthOpen({}));
                  }}
                >
                  Logout
                </Button>
              </Box>

          }
        </Box>
      </Box>
    </Box>
  );
};

export default AuthMenu;
