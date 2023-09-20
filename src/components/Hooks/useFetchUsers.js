import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  return await axios
    .get("/user/getusers")
    .then((res) => res)
    .catch((err) => err);
};
export const useFetchUsers = () => {
  return useQuery("getadminMember", fetchUsers);
};
