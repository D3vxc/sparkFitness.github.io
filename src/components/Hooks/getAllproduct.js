import { useQuery } from "react-query";
import axios from "axios";

export const useFetchAllProduct = () => {
  const { data, error, isLoading, refetch } = useQuery("getProduct", async () => {
    try {
      const response = await axios.get("product/allproduct");
      return response.data;
    } catch (error) {
      throw new Error("Error fetching users: " + error.message);
    }
  });

  return { data, error, isLoading, refetch };
};