import { useMemo } from "react";
import { salesData } from "../data/salesData";

const TotalRevuenue = () => {
  const totalRevenue = useMemo(() => {
    return salesData.reduce((acc, { price, quantity }) => {
      return acc + price * quantity;
    }, 0);
  }, []);
  return <div>The total revenue is {totalRevenue}</div>;
};

export default TotalRevuenue;
