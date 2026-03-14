import { useBadge } from "../../../Context/useBadge";
import HeaderBar from "../adminComponents/HeaderBar";
import Notification from "../adminComponents/Notification";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Notifications = () => {
  const { badgeCount } = useBadge();
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <HeaderBar headTitle={"Notifications"} badgeContent={badgeCount} />
      </Grid>
      <Box mt={4} display="flex" justifyContent="center" width="500px">
        <Notification />
      </Box>
    </Grid>
  );
};

export default Notifications;
