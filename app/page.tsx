"use client";
// ------------- import external dependencies ---------------
import { useState } from "react";

// ------------- import internal dependencies -------------
import SearchInput from "@/components/SearchComponent";
import UserDetail from "@/components/UserDetails";
import useSearch from "@/hooks/useSearch";
import styles from "./page.module.css";

type User = {
  login: string;
  id: number;
  avatar_url: string;
  type: string;
};

export default function Home() {
  let searchStatus;
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  const { queryUser } = useSearch();
  const { data, isFetching, isError, isSuccess } = queryUser(query && type === "org" ? `${query}+type:org` : query);

  /**
   * TODO:Skeleton state will be the proper solution on large applicartion
   * Return Loading state of User
   */
  if (isFetching) {
    searchStatus = <span className={styles.search_loading}>Loading Data...</span>;
  }

  /**
   * Return error status
   */
  if (isError) {
    searchStatus = <span className={styles.search_loading}>An Error occured. Please try again :)</span>;
  }

  /**
   * Return search data with empty items
   */
  if (isSuccess && data?.items.length === 0) {
    searchStatus = <span className={styles.search_loading}>No result was found for this search (:</span>;
  }

  /**
   * Return search data with values
   */
  if (isSuccess && data?.items.length > 0) {
    searchStatus = (
      <>
        <h2 className="text-center text-3xl">Search Result </h2>
        {data.items.map((user: User) => (
          <UserDetail name={user.login} type={user.type} img={user.avatar_url} key={user.id} />
        ))}
      </>
    );
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.header}>
        <h1 className="mt-8">Search for Users and Organization</h1>
        <span className={styles.select_desc}>Please select your search type</span>

        {/* ------ selection type ------ */}
        <div className={styles.selection_wrapper}>
          <div className="flex gap-4">
            <input
              type="radio"
              checked={type === "user"}
              id="user"
              name="search-type"
              onChange={() => {
                setType("user");
                setQuery("");
                setValue("");
              }}
            />
            <label htmlFor="user">User</label>
          </div>
          <div className="flex gap-4">
            <input
              type="radio"
              checked={type === "org"}
              id="organization"
              name="search-type"
              onChange={() => {
                setType("org");
                setQuery("");
                setValue("");
              }}
            />
            <label htmlFor="organization">Organization</label>
          </div>
        </div>

        <SearchInput
          searchDisabled={!type}
          btnDisabled={!type || isFetching}
          value={value}
          setValue={setValue}
          cb={() => setQuery(value)}
        />
      </section>

      {/* ------ search result ------- */}
      <section>
        <div className={styles.search_response}>{searchStatus}</div>
      </section>
    </main>
  );
}
