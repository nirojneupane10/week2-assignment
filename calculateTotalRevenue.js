import salesData from "./salesData.json" assert { type: "json" };
const calculateTotalRevenue = salesData.reduce((acc, { price, quantity }) => {
  return acc + price * quantity;
}, 0);

export default calculateTotalRevenue;
