import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Card = ({ data }) => {
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
        <img
          style={{
            display: "block",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          src={data.img}
          alt={`${data.make} ${data.model}`}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb="8px">
        <Typography>
          {data.make}{" "}
          <span style={{ color: "rgba(52, 112, 255, 1)" }}>{data.model}</span>,
          {data.year}
        </Typography>
        <Typography pr="9px">{data.rentalPrice}</Typography>
      </Box>
      <Typography sx={{ fontSize: "12px", color: "rgba(18, 20, 23, 0.5)" }}>
        {address[1]} | {address[2]} | {data.rentalCompany} | {data.type}
      </Typography>
      <Typography
        sx={{ fontSize: "12px", color: "rgba(18, 20, 23, 0.5)" }}
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
      >
        Learn more
      </Button>
    </Box>
  );
};

export default Card;
