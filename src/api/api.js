import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6494508b0da866a953678e52.mockapi.io/adverts",
});

export const fetchAdverts = () => instance.get("/");
export const filterAdverts = (adverts, { page, limit }) => {
  const totalAdverts = adverts.length;
  const itemsToShow = page * limit;
  const result = adverts.slice(0, itemsToShow);
  return { data: result, totalAdverts };
};
