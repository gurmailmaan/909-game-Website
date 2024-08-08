import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/global.css"
import "../../styles/Event.css"

import { BASE_URL } from "../../utils/base";
import { KEY } from "../../utils/key";

const EventDetails = () =>{
    const {eventId} = useParams();
    const [value, setValue] = useState("description");
    const [event, setEvent] = useState(null);
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }

    async function getItem() {
        const event = await fetch(
            `${BASE_URL}/api/events/${eventId}?populate=image`,
            {headers: {
                Authorization: `Bearer ${KEY}`
            }}
        );

        console.log();

        const itemJson = await event.json();
        setEvent(itemJson.data);
    }

    useEffect(() => {
        getItem();
    })

    return <Box
    width="80%"
    m= "80px auto" 
    >
        <Typography variant="h2" mb="20px" sx={{color:"#EA5A0B"}}>{event?.attributes?.name}</Typography>

        <Box display="flex" flexWrap="wrap" columnGap="40px">
            {/* Images */}
            <Box flex="1 1 40%" mb="40px">
                <img
                    alt={event?.name}
                    width="100%"
                    height="100%"
                    src={`${BASE_URL}${event?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    style={{objectFit: "contain"}}
                />
            </Box>
            {/* actions */}
            <Box flex="1 1 50%" mb="40px">
                <Box m="65px 0 25px 0">
                    <Typography variant="h3" sx={{fontSize:"36px"}}>{event?.attributes?.name}</Typography>
                    <Typography sx={{color:"#EA5A0B"}}>CATEGORIES: {event?.attributes?.category}</Typography>

                    <Typography sx={{ mt: "20px" }}>{event?.attributes?.longDescription}</Typography>
                </Box>
                <Box>
                    <Typography>Location: {event?.attributes?.location}</Typography>
                    <Typography>Time: {event?.attributes?.time}</Typography>
                    <Typography>Date: {event?.attributes?.date}</Typography>
                </Box>
            </Box>
        </Box>
        {/* Information */}
        <Box m="20px 0">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="DESCRIPTION" value="description" />
                {/* <Tab label="REVIEWS" value="reviews" /> */}
            </Tabs>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="15px">
            {value === "description" && (
                <div>{event?.attributes?.shortDescription}</div>
            )}
            
        </Box>

        
    </Box>

    
}

export default EventDetails;