import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Image } from "../components/Image.styled";
import { Link as RouterLink } from "react-router-dom";

const Homepage = () => {
  return (
    <Container
      maxWidth="md"
      component="section"
      sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Typography
        component={"h1"}
        sx={{ textAlign: "center", margin: "30px 0 10px 0", fontSize: "35px" }}
      >
        Rent a car in Ukraine
      </Typography>
      <Image
        src="https://i.infocar.ua/i/12/6580/1400x936.jpg"
        alt="A car"
        style={{ width: "100%" }}
      />
      <Button
        sx={{
          width: "50%",
          bgcolor: "rgba(52, 112, 255, 1)",
          color: "rgba(255, 255, 255, 1)",
          textTransform: "capitalize",
          "&:hover": { bgcolor: " rgba(11, 68, 205, 1) " },
          padding: "12px",
          margin: "0 auto",
        }}
        component={RouterLink}
        to="/catalog"
      >
        Get started
      </Button>
    </Container>
  );
};

export default Homepage;
