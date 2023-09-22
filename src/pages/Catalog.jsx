import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { Button, Grid, Typography } from "@mui/material";
import { fetchAdverts, filterAdverts } from "../api/api";

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

  const onClick = () => {
    setPage(page + 1);
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
                <Card data={advert} />
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
          onClick={onClick}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default Catalog;
