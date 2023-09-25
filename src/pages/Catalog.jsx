import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { Button, Grid, Typography } from "@mui/material";
import { fetchAdverts, filterAdverts } from "../api/api";
import Modal from "../components/Modal";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [filteredAdverts, setfilteredAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [filterValue, setFilterValue] = useState({
    brand: null,
    price: null,
    mileageFrom: null,
    mileageTo: null,
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState({
    id: 9582,
    year: 2008,
    make: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
    description:
      "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
    fuelConsumption: "10.5",
    engineSize: "3.6L V6",
    accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
    functionalities: [
      "Power liftgate",
      "Remote start",
      "Blind-spot monitoring",
    ],
    rentalPrice: "$40",
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 5858,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetchAdverts();
      setAdverts(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function filterData() {
      const response = await filterAdverts(adverts, page, limit, filterValue);
      setfilteredAdverts(response.data);
      const totalAdverts = response.totalAdverts;
      setIsButtonVisible(totalAdverts <= page * limit ? false : true);
    }
    filterData();
  }, [adverts, page, limit, filterValue]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const learnMore = () => {
    setModalVisible(true);
    console.log("modal true");
  };

  const onEscPress = (e) => {
    if (e.key === "Escape") {
      setCurrentAdvert({});
      setModalVisible(false);
    }
  };
  return (
    <>
      <SearchBar setFilterValue={setFilterValue} />
      {filteredAdverts.length === 0 && (
        <Typography sx={{ textAlign: "center" }}>No match found</Typography>
      )}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        component="ul"
        columns={4}
        columnSpacing="29px"
        rowSpacing="50px"
      >
        {filteredAdverts &&
          filteredAdverts.map((advert) => {
            return (
              <Grid item key={advert.id}>
                <Card data={advert} learnMore={learnMore} />
              </Grid>
            );
          })}
      </Grid>
      {isButtonVisible && (
        <Button
          sx={{
            color: "rgba(52, 112, 255, 1)",
            textTransform: "capitalize",
            "&:hover": { color: " rgba(11, 68, 205, 1) " },
            margin: "0 auto",
            display: "block",
            marginTop: "60px",
            marginBottom: "30px",
            textDecorationLine: "underline",
            fontSize: "16px",
          }}
          onClick={loadMore}
        >
          Load more
        </Button>
      )}
      {isModalVisible && (
        <Modal onEscPress={onEscPress} currentAdvert={currentAdvert} />
      )}
    </>
  );
};

export default Catalog;
