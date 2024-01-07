import HeaderBar from "../adminComponents/HeaderBar";
import SimulatedMap from "../adminComponents/SimulatedMap";
import { Grid } from "@mui/material";
import { useBadge } from "../../../Context/useBadge";

const Maps = () => {
  const { badgeCount } = useBadge();
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <HeaderBar headTitle={"Maps"} badgeContent={badgeCount} />
      </Grid>
      <Grid item xs={12} md={8} mt={1}>
        <SimulatedMap />
      </Grid>
    </Grid>
  );
};

export default Maps;
