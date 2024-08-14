import salesData from "./salesData.json" assert { type: "json" };

const totalSales = salesData.reduce((acc, { product, price, quantity }) => {
  const total = price * quantity;

  acc[product] = (acc[product] ?? 0) + total;

  return acc;
}, {});

Object.entries(totalSales).map(([product, total]) => {
  console.log(` ${product} : Rs ${total}`);
});
