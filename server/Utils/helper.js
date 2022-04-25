const getTotalOrders = (orders) => {
  return orders.length;
};
const findByOrderStatus = (byOrderStatus, orders) => {
  return orders.filter((item) => item.fields.order_status === byOrderStatus)
    .length;
};

const findCurrentMonthOrders = (orders) => {
  let dt = new Date();
  let currentMonth = dt.getMonth() + 1;
  let currentYear = dt.getFullYear();
  const filterOrders = orders.filter((item) => {
    let orderPlacedFullDate = new Date(item.fields.order_placed);
    let orderPlacedMonth = orderPlacedFullDate.getMonth() + 1;
    let orderPlacedYear = orderPlacedFullDate.getFullYear();
    return orderPlacedMonth === currentMonth && orderPlacedYear === currentYear;
  }).length;
  return filterOrders;
};

const findTotalRevenue = (orders) => {
  let revenue = orders.reduce((accumulator, currentItem) => {
    return (accumulator = accumulator + currentItem.fields.price);
  }, 0);
  return revenue.toFixed(2);
};

const findMostRecentOrders = (orders) => {
  const sortingByIdDesc = orders
    .sort((a, b) => {
      return new Date(b.fields.order_placed) - new Date(a.fields.order_placed);
    })
    .slice(0, 20);
  return sortingByIdDesc;
};

module.exports = {
  getTotalOrders,
  findByOrderStatus,
  findCurrentMonthOrders,
  findTotalRevenue,
  findMostRecentOrders,
};
