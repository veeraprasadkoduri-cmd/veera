import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import BadgeList from "../../Common/BadgeList";
import { useBadge } from "../../../Context/useBadge";

const HeaderBar = ({ headTitle, paragraph, badgeContent }) => {
  const [showBadgeList, setShowBadgeList] = useState(false);

  const { resetBadgeCount } = useBadge();

  const handleBadgeList = () => {
    setShowBadgeList((currentVal) => !currentVal);
    resetBadgeCount();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "pointer" }
            }}
          >
            {headTitle}
            <Typography
              variant="p"
              component="div"
              sx={{
                fontWeight: "100",
                fontSize: "1rem"
              }}
            >
              {paragraph}
            </Typography>
          </Typography>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleBadgeList}
          >
            <Badge badgeContent={badgeContent} color="error">
              <NotificationsIcon />
            </Badge>
            {showBadgeList && <BadgeList showBadgeList={showBadgeList} />}
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
