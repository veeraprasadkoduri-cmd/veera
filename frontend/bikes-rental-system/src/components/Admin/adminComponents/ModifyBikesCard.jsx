/* eslint-disable no-unused-vars */
import {
  CardHeader,
  CardContent,
  Card,
  Typography,
  Box,
  TextField,
  CardActions,
  Button,
  Stack
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

import Loading from "./Loading";

const ModifyBikesCard = ({ bikeTypeData, loading, errors }) => {
  const [edited, isEdited] = useState(false);
  const [bikeId, setBikeId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  if (loading) {
    return <Loading />;
  }

  const handleEditBikeType = (bikeTypeId) => {
    setBikeId(bikeTypeId);
    isEdited(true);
  };

  const handleChangeBikeType = (e, index) => {
    console.log(index);
    console.log(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleDeleteBikeType = (id) => {};

  const onSaveChanges = async () => {
    isEdited(false);
  };

  const titleStyle = {
    marginLeft: 1,
    cursor: "pointer"
  };

  let renderBikes = bikeTypeData?.map((bike, index) => (
    <Box key={bike.id}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          height: "auto"
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          disabled={!edited}
          defaultValue={`${bike.description}`}
          onChange={(e) => handleChangeBikeType(e, index)}
          required
        />
        {!edited && (
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => handleEditBikeType(bike.id)}
          >
            <EditIcon />
          </IconButton>
        )}
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => handleDeleteBikeType(bike.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  ));

  return (
    <Card
      variant="outlined"
      sx={{
        width: 800,
        height: "auto",
        margin: "auto",
        marginTop: "2rem"
      }}
    >
      <CardHeader
        title={
          <Box sx={{ display: "flex", gap: 5, fontSize: "0.2rem" }}>
            <Typography sx={titleStyle}>Modify:</Typography>
            <Typography sx={titleStyle}>
              <FormatListNumberedIcon sx={{ marginRight: "0.3rem" }} />
              Bike Types
            </Typography>
            <Typography sx={titleStyle}>
              <PedalBikeIcon sx={{ marginRight: "0.3rem" }} />
              Bikes
            </Typography>
          </Box>
        }
        sx={{
          backgroundColor: "#962dae",
          color: "white"
        }}
      ></CardHeader>
      <CardContent>{renderBikes}</CardContent>
      {edited && (
        <CardActions
          sx={{
            justifyContent: "flex-end",
            paddingRight: "1rem",
            paddingBottom: "1rem"
          }}
        >
          <Button variant="contained" color="buttonRed" onClick={onSaveChanges}>
            Save changes
          </Button>
        </CardActions>
      )}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={2} mt={2} mb={2}>
          <Pagination count={4} color="secondary" />
        </Stack>
      </Box>
    </Card>
  );
};

export default ModifyBikesCard;
