import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6494508b0da866a953678e52.mockapi.io/adverts",
});

export const fetchAdverts = (page = 1, limit = 8) =>
  instance.get("/", { params: { page, limit } });
