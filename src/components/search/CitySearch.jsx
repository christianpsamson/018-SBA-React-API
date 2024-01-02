import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../Api";

const CitySearch = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const handleMenuOpen = () => {
    setSearch("");
    console.log("It happened");
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      onMenuOpen={handleMenuOpen}
    />
  );
};

export default CitySearch;
