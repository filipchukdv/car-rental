import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { Button, Grid } from "@mui/material";
import { fetchAdverts, filterAdverts } from "../api/api";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [filteredAdverts, setfilteredAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchAdverts();
      setAdverts(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function filterData() {
      const response = await filterAdverts(adverts, { page, limit });
      setfilteredAdverts(response.data);
      const totalAdverts = response.totalAdverts;
      setIsButtonVisible(totalAdverts <= page * limit ? false : true);
    }
    filterData();
  }, [page, limit, adverts]);

  const onClick = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar />
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
