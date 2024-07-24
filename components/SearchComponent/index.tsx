// ------------ import external dependencies ----------------
import React from "react";

// --------------- import interna dependencies -------------
import styles from "./style.module.css";

interface Props {
  searchDisabled: boolean;
  btnDisabled: boolean;
  cb?: () => void;
  value: string;
  setValue: (val: string) => void;
}

function SearchInput({ searchDisabled, btnDisabled, cb, value, setValue }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  /**
   * Handle search input submit
   * @param e
   */
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      cb?.();
    }
  };

  return (
    <div>
      <form className={styles.search_wrapper} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search" aria-labelledby="search" className="hidden">
            Search
          </label>
          <input
            type="search"
            id="search"
            className={styles.search_input}
            disabled={searchDisabled}
            value={value}
            onChange={handleChange}
          />
        </div>
        <button className={styles.btn} disabled={!value || btnDisabled}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
