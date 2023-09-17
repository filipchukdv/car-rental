import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { Button, Grid } from "@mui/material";
import { fetchAdverts } from "../api/api";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchAdverts(page);
      console.log(response);
      setAdverts((prev) => [...prev, ...response.data]);
    }
    fetchData();
  }, [page]);

  const onClick = () => {
    setPage(page + 1);
    console.log(page);
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
        {adverts.map((advert) => {
          return (
            <Grid item key={advert.id}>
              <Card data={advert} />
            </Grid>
          );
        })}
      </Grid>
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
    </>
  );
};

export default Catalog;
