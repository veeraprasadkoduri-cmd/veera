/* eslint-disable no-unused-vars */
import Cards from "../adminComponents/Cards";
import ChartCard from "../adminComponents/ChartCard";
import useFetch from "../../../Context/useFetch";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Grid
} from "@mui/material";
import Loading from "../adminComponents/Loading";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StoreIcon from "@mui/icons-material/Store";
import InfoIcon from "@mui/icons-material/Info";
import TwitterIcon from "@mui/icons-material/Twitter";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import UpdateIcon from "@mui/icons-material/Update";
import { useBadge } from "../../../Context/useBadge";
import {
  SearchInput,
  SearchIconWrapper,
  StyledInputBase
} from "../../Admin/adminThemes/dashboardTheme";

const AdminDashboard = () => {
  const {
    data: bikesAvailability,
    loading,
    errors
  } = useFetch("/api/v1/bike/availableBikes");

  const {
    data: bikeTypeData,
    bikeTypeLoading,
    bikeTypeErrors
  } = useFetch("/api/v1/countBikeTypes");

  const {
    data: customersData,
    customersLoading,
    customersErrors
  } = useFetch("/api/v1/customers/countAllCustomers");

  const {
    data: invoiceData,
    invoiceLoading,
    invoiceErrors
  } = useFetch("/api/v1/invoices/InvoicesCountAndSum");

  const { badgeCount } = useBadge();

  const styles = {
    color: "white",
    height: "100%"
  };

  const gridContainerMargins = {
    margin: "6rem 2rem"
  };
  //main Icons
  const copyIcon = <ContentCopyIcon sx={styles} />;
  const storeIcon = <StoreIcon sx={styles} />;
  const infoIcon = <InfoIcon sx={styles} />;
  const twitterIcon = <TwitterIcon sx={styles} />;

  //footerIcons

  const bikeIcon = <DirectionsBikeOutlinedIcon sx={{ color: "red" }} />;
  const dateRangeIcon = <DateRangeIcon />;
  const bikeScooterIcon = <BikeScooterIcon />;
  const updateIcon = <UpdateIcon />;

  const cardData = [
    {
      color: "#fc9006",
      icon: copyIcon,
      mainText: "Available Bikes / Total Bikes",
      mainNumber: `${bikesAvailability?.availableBikes}/${bikesAvailability?.totalBikes}`,
      footerText: `${bikesAvailability?.rentalBikes} ${
        bikesAvailability?.rentalBikes <= 1
          ? "bike is rented!"
          : "bikes are rented!"
      }`,
      footerIcon: bikeIcon
    },
    {
      color: "#49ae4f",
      icon: storeIcon,
      mainText: `${invoiceData?.countInvoices} Invoices`,
      mainNumber: `$${invoiceData?.totalNetAmount?.[0]?.total_amount}`,
      footerText: "Last Month",
      footerIcon: dateRangeIcon
    },
    {
      color: "#e04133",
      icon: infoIcon,
      mainText: "Total Bike Types",
      mainNumber: `${bikeTypeData?.bikeTypeCount}`,
      footerText: "Updated from database",
      footerIcon: bikeScooterIcon
    },
    {
      color: "#04aec4",
      icon: twitterIcon,
      mainText: "Total Customers",
      mainNumber: `${customersData?.totalCustomersCount?.cust_total}`,
      footerText: "Just Updated",
      footerIcon: updateIcon
    }
  ];

  const chartCardData = [
    {
      color: "#53ad58",
      title: "Daily Rentals",
      text: "55% increase in today rentals",
      footerText: "update 4 minutes ago",
      chartLabel: "Rentals"
    },
    {
      color: "#fe940c",
      title: "Email Subscriptions",
      text: "Last Campaign Performance",
      footerText: "campaign sent 2 days ago",
      chartLabel: "Email Subscriptions"
    },
    {
      color: "#e9413e",
      title: "Completed Tasks",
      text: "Last Campaign Performance",
      footerText: "campaign sent 2 days ago",
      chartLabel: "Completed Tasks"
    }
  ];

  if (loading || bikeTypeLoading || customersLoading || invoiceLoading) {
    return <Loading />;
  }

  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
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
            Dashboard
          </Typography>
          <SearchInput>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchInput>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge color="error" badgeContent={badgeCount}>
              <NotificationsIcon />
            </Badge>
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
      <Grid container sx={gridContainerMargins}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Cards
              color={card.color}
              icon={card.icon}
              mainText={card.mainText}
              mainNumber={card.mainNumber}
              footerText={card.footerText}
              footerIcon={card.footerIcon}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container sx={gridContainerMargins} gap={18}>
        {chartCardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ChartCard
              chartColor={card.color}
              title={card.title}
              text={card.text}
              footerText={card.footerText}
              chartLabel={card.chartLabel}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
