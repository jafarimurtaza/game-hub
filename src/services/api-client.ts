import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "64e51d10e7f84b2e9fea766fd510333d",
  },
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config: AxopsRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint)
      .then((res) => res.data);
  };
}

export default APIClient;
