import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/global.css"
import { BASE_URL } from "../../utils/base";

const Event = ({ event, width }) => {
  const navigate = useNavigate();
  const {
    palette: { neutral },
  } = useTheme();

  const { category,  date, shortDescription, name, image } =
    event.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box display="flex" justifyContent="space-between" >
          <Box display="flex" justifyContent="space-between" flex="wrap" border="2px solid black" borderRadius="5px" background-color="#eee" box-shadow="0 8px 8px -4px lightblue" onClick={() => navigate(`/event/${event.id}`)}
          style={{ cursor: "pointer" }}
          >
            <img
            alt={event.name}
            width="200px"
            height="200px"
            src={`${BASE_URL}${url}`}
            />
            <Box mt="3px" height="100px" padding="0.5rem">
              <Typography variant="subtitle2" color={neutral.dark}>
                {category
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </Typography>
              <Typography variant="h3">{name}</Typography>
              <Typography variant="p">{shortDescription}</Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography>{date}</Typography>
                </Box>
            </Box>
          </Box>
        </Box>
      
  );
};

export default Event;
