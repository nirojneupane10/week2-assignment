import { salesData } from "./salesData.js";

const calculateTotalRevenue = salesData.reduce((acc, { price, quantity }) => {
  return acc + price * quantity;
}, 0);

export default calculateTotalRevenue;
