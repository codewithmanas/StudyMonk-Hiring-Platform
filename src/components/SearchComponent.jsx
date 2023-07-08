import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from "./SearchComponent.module.css";

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = data.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className={`${styles.search} ${styles.container}`}>
      <div className={styles.search__container}>
      
      <h1>Search Candidates</h1>
      
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.search__input}
      />
      <table className={styles.candidate__table}>
        <tr>
          <th>Name:</th>
          <th>Role:</th>
          <th>Location:</th>
        </tr>
        {searchResults.map((result, index) => (
          <tr key={index}>
            {/* <div className={styles.candidate__list}> */}
              <td className={styles.candidate__name}>{result}</td>
              <td className={styles.role}>Frontend Developer</td>
              <td className={styles.role}>Bhubaneswar</td>
            {/* </div> */}
        </tr>
        ))}
      </table>
      </div>
    </div>
  );
};

export default SearchComponent;

SearchComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired
  };