import React from "react";
// import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  Paper,
  TableRow,
} from "@mui/material";

const TableComponent = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.recentOrders ? (
            orders.recentOrders.map((item) => (
              <TableRow>
                <TableCell>{item.fields.order_id}</TableCell>
                <TableCell align="right">{item.fields.product_name}</TableCell>
                <TableCell align="right">{item.fields.order_status}</TableCell>
                <TableCell align="right">{item.fields.price}</TableCell>
                <TableCell align="right">{item.fields.order_placed}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>No data found.</TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Table.propTypes = {
//   cols: PropTypes.array.isRequired,
//   data: PropTypes.array.isRequired,
//   bordered: PropTypes.bool,
//   hoverable: PropTypes.bool,
//   striped: PropTypes.bool,
//   isDark: PropTypes.bool,
// };

// Table.defaultProps = {
//   bordered: true,
//   hoverable: false,
//   striped: false,
//   isDark: false,
// };

export default TableComponent;
