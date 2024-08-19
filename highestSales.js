//Calculation of the product with highest sales
import salesData from "./salesData.json" assert { type: "json" };

const { topSellingProduct, maxSales } = salesData.reduce(
  (acc, { product, price, quantity }) => {
    const total = price * quantity;

    acc.totalSales[product] = (acc.totalSales[product] ?? 0) + total;

    if (acc.totalSales[product] > acc.maxSales) {
      acc.maxSales = acc.totalSales[product];
      acc.topSellingProduct = product;
    }

    return acc;
  },
  {
    totalSales: {},
    topSellingProduct: "",
    maxSales: 0,
  }
);

console.log(
  `Top Selling Product: ${topSellingProduct} with Total Sales: Rs ${maxSales}`
);
