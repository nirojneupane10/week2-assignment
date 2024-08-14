//Calculation of the product with highest sales
import salesData from "./salesData.json" assert { type: "json" };

const totalSales = salesData.reduce((acc, { product, price, quantity }) => {
  const total = price * quantity;
  acc[product] = (acc[product] ?? 0) + total;
  return acc;
}, {});

const [topSellingProduct, maxSales] = Object.entries(totalSales).reduce(
  (topProduct, currentProduct) => {
    return currentProduct[1] > topProduct[1] ? currentProduct : topProduct;
  },
  ["", 0]
);

console.log(
  `Top Selling Product: ${topSellingProduct} with Total Sales: Rs ${maxSales}`
);
