import { useMemo } from "react";
import "./SearchBar.css";
const SearchBar = ({
  search,
  pin,
  searchBarPosition,
  searchBarTop,
  searchBarLeft,
}) => {
  const searchBarStyle = useMemo(() => {
    return {
      position: searchBarPosition,
      top: searchBarTop,
      left: searchBarLeft,
    };
  }, [searchBarPosition, searchBarTop, searchBarLeft]);

  return (
    <div className="search-bar" style={searchBarStyle}>
      <div className="search-bar-child" />
      <img className="search-icon" alt="" src={search} />
      <div className="search-bar-item" />
      <img className="pin-icon" alt="" src={pin} />
      <i className="cbe">CBE</i>
    </div>
  );
};

export default SearchBar;
