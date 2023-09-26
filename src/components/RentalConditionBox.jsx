import { Box, Typography } from "@mui/material";
import React from "react";

const RentalConditionBox = ({ text }) => {
  const modifiedText = (text) =>
    text.toString().replace(/\d+/g, (v) => {
      return `<span style={{ fontWeight: "600", color: "rgba(52, 112, 255, 1)" }}>
          ${v}
        </span>`;
    });
  return (
    <Box
      component="li"
      sx={{ width: "133px", backgroundColor: "rgba(249, 249, 249, 1)" }}
    >
      {modifiedText(text)}
    </Box>
  );
};

export default RentalConditionBox;
