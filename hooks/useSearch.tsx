// -------------- import external dependencies -------------
import React from "react";
import { useQuery } from "@tanstack/react-query";

// -------------- import internal dependencies --------------
import { searchUser } from "@/api/search";

/**
 * use search hooks for calling all endpoint related to search query
 * @returns
 */
function useSearch() {
  const queryUser = (query: string) =>
    // eslint-disable-next-line
    useQuery({
      queryKey: ["search user", query],
      queryFn: async () => {
        const response = await searchUser(query);
        const data = await response.json();

        return data;
      },
      enabled: !!query,
    });

  return {
    queryUser,
  };
}

export default useSearch;
