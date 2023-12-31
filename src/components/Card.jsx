import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Image } from "./Image.styled";

const Card = ({ data, learnMore }) => {
  const address = data.address.split(",");
  return (
    <Box
      component="li"
      sx={{
        width: 274,
        overflow: "hidden",
      }}
    >
      <Box
        width={274}
        height={268}
        sx={{ borderRadius: "14px", overflow: "hidden" }}
        mb="14px"
      >
        <Image
          src={data.img}
          alt={`${data.make} ${data.model}`}
          style={{
            display: "block",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb="8px">
        <Typography sx={{ whiteSpace: "nowrap" }}>
          {data.make}{" "}
          <span style={{ color: "rgba(52, 112, 255, 1)" }}>{data.model}</span>,
          {data.year}
        </Typography>
        <Typography pr="9px">{data.rentalPrice}</Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "12px",
          color: "rgba(18, 20, 23, 0.5)",
          whiteSpace: "nowrap",
        }}
      >
        {address[1]} | {address[2]} | {data.rentalCompany} | {data.type}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          color: "rgba(18, 20, 23, 0.5)",
          whiteSpace: "nowrap",
        }}
        mb="28px"
      >
        {data.mileage} | {data.accessories[0]}
      </Typography>
      <Button
        sx={{
          width: "100%",
          bgcolor: "rgba(52, 112, 255, 1)",
          color: "rgba(255, 255, 255, 1)",
          textTransform: "capitalize",
          "&:hover": { bgcolor: " rgba(11, 68, 205, 1) " },
          padding: "12px",
        }}
        onClick={learnMore}
      >
        Learn more
      </Button>
    </Box>
  );
};

export default Card;
