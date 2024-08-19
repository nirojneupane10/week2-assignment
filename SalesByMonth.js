//Monthly sales details of each product
import salesData from "./salesData.json" assert { type: "json" };
function filterSalesByMonth(salesData, month, year) {
  return salesData.filter(({ date }) => {
    const saleDate = new Date(date);
    return saleDate.getMonth() === month - 1 && saleDate.getFullYear() === year;
  });
}

const SalesByMonth = filterSalesByMonth(salesData, 4, 2023);

SalesByMonth.map(({ product, date, quantity, price }) => {
  console.log(
    `Product: ${product}, Date: ${date}, Quantity: ${quantity}, Price: Rs${price}`
  );
});
