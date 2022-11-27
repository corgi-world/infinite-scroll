import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { IUserResponse } from "@/types/user";

const service = axios.create({
  baseURL: "/api/userList",
});
function get(queryString: string) {
  return service.get(queryString).then((response) => response.data);
}

export function useFetchUserList() {
  const queryResult = useInfiniteQuery<IUserResponse>(
    ["user"],
    ({ pageParam = "" }) => get(`?id=${pageParam}`),
    {
      getNextPageParam: ({ userList }) =>
        userList ? userList[userList.length - 1].id : undefined,
    }
  );

  return queryResult;
}
