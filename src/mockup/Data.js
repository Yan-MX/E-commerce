import Data from "./MockupDataWith100Items.json";
let num = 0;
const data = Data.map((data) => ({
  key: num++,
  name: data["Product Name"],
  id: data["Product ID"],
  listprice: data["Listing Price"],
  saleprice: data["Sale Price"],
  discount: data["Discount"],
  brand: data.Brand,
  description: data.Description,
  rating: data.Rating,
  reviews: data.Reviews,
  images: data.Images.slice(1, -1),
}));
export default data;
