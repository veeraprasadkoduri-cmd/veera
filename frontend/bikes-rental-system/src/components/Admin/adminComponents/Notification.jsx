import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getNotifications } from "../../../utils/NotificationsUtils";
import { useEffect } from "react";

const noNotificationsStyle = {
  marginTop: "3rem",
  fontSize: "2rem"
};

const Notification = ({ resetBadgeCount }) => {
  const availableNotifications = getNotifications();

  useEffect(() => {
    resetBadgeCount();
  }, [resetBadgeCount]);

  if (availableNotifications.length === 0) {
    return (
      <Box component="h4" className={noNotificationsStyle}>
        🙁 You have no new notifications!
      </Box>
    );
  }

  return (
    <List sx={{ width: "100%" }}>
      {availableNotifications?.map((bikeType) => {
        return (
          <ListItem
            key={bikeType.id}
            alignItems="center"
            sx={{
              border: "1px solid green"
            }}
          >
            <ListItemAvatar>
              <Avatar
                alt="no-Pic"
                src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?size=626&ext=jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={bikeType.message}
              secondary={
                <>
                  <Typography
                    sx={{ display: "block", marginTop: "0.3rem" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {bikeType.data.bikeType}
                  </Typography>
                  price / hour - {bikeType.data.price + "$"}
                  <Typography
                    sx={{ display: "block", marginTop: "0.3rem" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Date / Time:
                  </Typography>
                  {bikeType.time}
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Notification;
