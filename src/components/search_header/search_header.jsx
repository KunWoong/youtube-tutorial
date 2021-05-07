import styles from "./search_header.module.css";
import React, { memo, useRef } from "react";

const SearchHeader = memo((props) => {
  const inputRef = useRef();
  const handleSearch = () => {
    props.onSearch(inputRef.current.value);
    // inputRef.current.
  };
  const onSubmit = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      ></input>
      <button className={styles.button} type="submit" onClick={onSubmit}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
