import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  PolylineF,
  MarkerF
} from "@react-google-maps/api";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useCallback, useState } from "react";

const simulatedPath = {
  routeId1: [
    { lat: 44.8565, lng: 24.869 }, // Pitesti
    { lat: 44.426765, lng: 26.102537 } // Bucharest
  ],
  routeId2: [
    { lat: 44.8565, lng: 24.869 }, // Pitesti
    { lat: 44.940399, lng: 26.023821 } // Ploiesti
  ],
  routeId3: [
    { lat: 44.8565, lng: 24.869 }, // Pitesti
    { lat: 44.177269, lng: 28.65288 } // Constanta
  ]
};

const mapStyles = {
  height: "50vh",
  width: "100%"
};

//default start at Pitesti
const defaultCenter = {
  lat: 44.8565, // Initial latitude
  lng: 24.869 // Initial longitude
};

const SimulatedMap = () => {
  const [paths, setPaths] = useState(simulatedPath.routeId1);
  const [routes, setRoutes] = useState("routeId1");
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const handleChange = (e) => {
    setRoutes(e.target.value);
    setPaths(simulatedPath[e.target.value]);
  };
  //coordinates

  return (
    <>
      {isLoaded ? (
        <Box>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={5}
            center={defaultCenter}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <PolylineF
              path={paths}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2
              }}
            ></PolylineF>
            <MarkerF position={defaultCenter} label="A" />
            <MarkerF position={paths[paths.length - 1]} label="B" />
          </GoogleMap>
        </Box>
      ) : (
        <>google map cannot be loaded!</>
      )}
      <Box
        sx={{
          width: "50rem",
          gap: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Typography variant="h6" component="h6" mt={4}>
          Select the route to view it on the map
        </Typography>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">RouteID</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={routes}
            label="RouteID"
            onChange={handleChange}
          >
            <MenuItem value="routeId1">Pitesti-Bucharest</MenuItem>
            <MenuItem value="routeId2">Pitesti-Ploiesti</MenuItem>
            <MenuItem value="routeId3">Pitesti-Constanta</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default React.memo(SimulatedMap);
