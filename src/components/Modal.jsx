import { Box, Button, Typography } from "@mui/material";

import React, { useEffect } from "react";
import { Image } from "./Image.styled";

const Modal = ({ onEscPress, currentAdvert }) => {
  useEffect(() => {
    window.addEventListener("keydown", onEscPress);
    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onEscPress]);
  const rentalConditions = currentAdvert.rentalConditions.split("\n");
  console.log(rentalConditions);
  const address = currentAdvert.address.split(",");
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: "10",
      }}
    >
      <Box
        component={"article"}
        sx={{
          width: "541px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          padding: "40px",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        <Image
          src={currentAdvert.img}
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            width: "100%",
            maxHeight: "248px",
            marginBottom: "14px",
          }}
        />
        <Typography
          sx={{
            whiteSpace: "nowrap",
            fontSize: "18px",
            lineHeight: "1.5",
            marginBottom: "8px",
          }}
          component="h2"
        >
          {currentAdvert.make}{" "}
          <span style={{ color: "rgba(52, 112, 255, 1)" }}>
            {currentAdvert.model}
          </span>
          ,{currentAdvert.year}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "rgba(18, 20, 23, 0.5)",
            whiteSpace: "nowrap",
            mb: "4px",
          }}
          component="p"
        >
          {address[1]} | {address[2]} | id:{currentAdvert.id} | Year:
          {currentAdvert.year} | Type: {currentAdvert.type}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "rgba(18, 20, 23, 0.5)",
            whiteSpace: "nowrap",
            mb: "14px",
          }}
          component="p"
        >
          Fuel consumption: {currentAdvert.fuelConsumption} | Engine size :
          {currentAdvert.engineSize}
        </Typography>
        <Typography component="p" sx={{ mb: "24px" }}>
          {currentAdvert.description}
        </Typography>
        <Typography component="h3" sx={{ mb: "8px" }}>
          Accessories and functionalities:
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "12px",
            color: "rgba(18, 20, 23, 0.5)",
            whiteSpace: "nowrap",
            mb: "4px",
          }}
        >
          {currentAdvert.accessories[0]} | {currentAdvert.accessories[1]} |
          {currentAdvert.accessories[2]}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "12px",
            color: "rgba(18, 20, 23, 0.5)",
            whiteSpace: "nowrap",
            mb: "24px",
          }}
        >
          {currentAdvert.functionalities[0]} |{currentAdvert.functionalities[1]}
          |{currentAdvert.functionalities[2]}
        </Typography>
        <Typography component="h3">Rental Conditions:</Typography>

        <Button
          sx={{
            width: "168px",
            bgcolor: "rgba(52, 112, 255, 1)",
            color: "rgba(255, 255, 255, 1)",
            textTransform: "capitalize",
            "&:hover": { bgcolor: " rgba(11, 68, 205, 1) " },
            padding: "12px",
            borderRadius: "14px",
          }}
        >
          Rental car
        </Button>
      </Box>
    </Box>
  );
};

export default Modal;
