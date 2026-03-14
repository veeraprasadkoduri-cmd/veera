import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { getNotifications } from "../../utils/NotificationsUtils";

const headerStyle = {
  textAlign: "start",
  marginLeft: "1rem",
  fontSize: "1rem"
};

export default function BadgeList({ showBadgeList }) {
  const availableNotifications = getNotifications();

  //   if (availableNotifications) {
  //     console.log("availableNotifications ", availableNotifications);
  //   }

  return (
    <Box
      sx={{
        position: "absolute",
        width: 360,
        height: 500,
        top: "64px",
        boxSizing: "border-box",
        right: 0,
        overflow: "hidden",
        zIndex: 1,
        transition: "opacity 0.3s ease", // Add a transition for opacity
        opacity: showBadgeList ? 1 : 0 // Set opacity based on showList
      }}
    >
      <List
        sx={{
          bgcolor: "#F0EDF2",
          color: "#000",
          borderRadius: "10px"
        }}
      >
        <Typography component="div" sx={headerStyle}>
          Notifications
          <Divider color="black" />
        </Typography>
        {availableNotifications.length !== 0 ? (
          availableNotifications.map((notifications) => {
            return (
              <ListItem
                key={notifications.id}
                sx={{
                  "&:hover": {
                    bgcolor: "#D2D1D2"
                  }
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="no-Pic"
                    src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?size=626&ext=jpg"
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={notifications.bikeType}
                  secondary={notifications.time}
                />
              </ListItem>
            );
          })
        ) : (
          <Typography sx={headerStyle}>
            {" "}
            🙁 You have no new notifications!
          </Typography>
        )}
      </List>
    </Box>
  );
}
