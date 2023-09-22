import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6494508b0da866a953678e52.mockapi.io/adverts",
});

export const fetchAdverts = () => instance.get("/");
export const filterAdverts = (adverts, page, limit, filterValue) => {
  const { brand, price, mileageTo, mileageFrom } = filterValue;
  console.log(brand, price, mileageFrom, mileageTo);
  const itemsToShow = page * limit;
  const filtered = adverts
    .filter((advert) => advert.make === brand || brand === null)
    .filter(
      (advert) => Number(advert.rentalPrice.slice(1)) <= price || price === null
    )
    .filter((advert) => advert.make === brand || brand === null)
    .filter((advert) => advert.make === brand || brand === null);
  const totalAdverts = filtered.length;
  const result = filtered.slice(0, itemsToShow);
  return { data: result, totalAdverts };
};
