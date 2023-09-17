import React from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { Grid } from "@mui/material";

const Catalog = () => {
  const cardExample = {
    id: 19590,
    year: 2018,
    make: "Subaru",
    model: "Outback",
    type: "SUV",
    img: "https://focus.ua/static/storage/thumbs/1200x630/3/87/c2ef89af-71cee569e75f6065eb5ab256db984873.jpeg?v=9971_1",
    description:
      "The Subaru Outback is a versatile and reliable SUV that combines off-road capability with a comfortable and spacious interior.",
    fuelConsumption: "8.7",
    engineSize: "2.5L 4-cylinder",
    accessories: [
      "Leather upholstery",
      "Power moonroof",
      "Harman Kardon premium audio system",
    ],
    functionalities: [
      "Symmetrical All-Wheel Drive",
      "X-Mode off-road assist",
      "Subaru EyeSight driver-assist system",
    ],
    rentalPrice: "$40",
    rentalCompany: "Adventure Car Rentals",
    address: "987 Example Street, Kyiv, Ukraine",
    rentalConditions:
      "Minimum age: 21\nValid driver's license\nCredit card required",
    mileage: 1061,
  };

  return (
    <>
      <SearchBar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing="29px"
      >
        <Card data={cardExample} />
        <Card data={cardExample} />
        <Card data={cardExample} />
        <Card data={cardExample} />
        <Card data={cardExample} />
        <Card data={cardExample} />
        <Card data={cardExample} />
        <Card data={cardExample} />
      </Grid>
    </>
  );
};

export default Catalog;
