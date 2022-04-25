import React from "react";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import "./homePage.scss";
import Widget from "../../Components/Widget/Widget";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Grid, Box, Typography } from "@mui/material";
import TableComponent from "../../Components/DataTables/TableConponent";

const HomePage = () => {
  const metrics = useSelector((state) => state.metrics.metrics);
  const orderStatus = "In Progress";
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dt = new Date();

  function ErrorFallback({ error }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Grid container className="homeContainer">
        <Grid item xl={12} lg={12}>
          <Typography variant="h5" gutterBottom>
            Dashboard
          </Typography>
          <Box className="widgets">
            <Widget
              title="Total Orders"
              count={metrics.totalOrders}
              icon={<ShoppingCartIcon />}
            />
            <Widget
              isCurrency={true}
              title="Total Revenue"
              count={metrics.totalRevenue}
              icon={<CurrencyPoundIcon />}
            />
            <Widget
              title={`Order Status: ${orderStatus}`}
              count={metrics.ordersByStatus}
              icon={<TrackChangesIcon />}
            />
            <Widget
              title={`Current month: ${monthNames[dt.getMonth()]}`}
              count={metrics.totalCurrentMonthOrders}
              icon={<CalendarMonthIcon />}
            />
          </Box>
        </Grid>
        <Grid item lg={12} xl={12} className="tableContainer">
          <Typography variant="h5" gutterBottom>
            Recent Orders
          </Typography>
          <TableComponent orders={metrics} />
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default HomePage;
