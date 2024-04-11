import axios from "axios";

import { BASE_API_URL } from "../config";

const client = axios.create({
  baseURL: BASE_API_URL,
});

export default client;
