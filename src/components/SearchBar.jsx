import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "../index.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const SearchBar = ({ setFilterValue }) => {
  const brandOptions = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Chrysler",
    "Kia",
    "Land",
  ];
  const priceOptions = Array.from(new Array(500 / 10 + 1)).map(
    (_, index) => `${index * 10}$`
  );
  const [filter, setFilter] = useState({
    brand: null,
    price: null,
    mileageFrom: null,
    mileageTo: null,
  });

  const onSubmit = () => {
    setFilterValue(filter);
  };
  return (
    <>
      <Container
        maxWidth="md"
        component="ul"
        sx={{
          listStyle: "none",
          color: "rgba(138, 138, 137, 1)",
          display: "flex",
          gap: "18px",
          alignItems: "flex-end",
        }}
      >
        <Box component="li">
          <Typography sx={{ mb: "8px" }}>Car brand</Typography>
          <Autocomplete
            onChange={(e, value) => setFilter({ ...filter, brand: value })}
            size="18px"
            id="brand"
            disablePortal
            options={brandOptions}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            sx={{ width: 224 }}
            renderInput={(params) => (
              <TextField
                className="input"
                {...params}
                placeholder="Enter the text"
              />
            )}
          />
        </Box>
        <Box component="li">
          <Typography sx={{ mb: "8px" }}>Price/ 1 hour</Typography>
          <Autocomplete
            onChange={(e, value) =>
              setFilter({
                ...filter,
                price: value ? Number(value.slice(0, -1)) : value,
              })
            }
            id="price"
            disablePortal
            options={priceOptions}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            sx={{ width: 125 }}
            renderInput={(params) => (
              <TextField {...params} placeholder="To $" />
            )}
          />
        </Box>
        <Box component="li">
          <Typography sx={{ mb: "8px" }}>Car mileage / km</Typography>
          <Box sx={{ display: "flex" }}>
            <TextField
              id="from"
              placeholder="From"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  mileageFrom: e.target.value === "" ? null : e.target.value,
                })
              }
            />
            <TextField
              id="to"
              placeholder="To"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  mileageTo: e.target.value === "" ? null : e.target.value,
                })
              }
            />
          </Box>
        </Box>
        <Button
          sx={{
            width: 136,
            height: 48,
            bgcolor: " rgba(52, 112, 255, 1)",
            color: " rgba(255, 255, 255, 1)",
            fontWeight: 700,
            textTransform: "capitalize",
            "&:hover": { bgcolor: " rgba(11, 68, 205, 1) " },
          }}
          onClick={onSubmit}
        >
          Search
        </Button>
      </Container>
    </>
  );
};

export default SearchBar;
