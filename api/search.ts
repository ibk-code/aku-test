/**
 * Search for user withing gitHub
 * @param query
 * @returns
 */
export const searchUser = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`);
};
