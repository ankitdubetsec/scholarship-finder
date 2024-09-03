import React, { useState } from "react";

const FilterComponent = () => {
  const [filters, setFilters] = useState({
    location: "",
    degree: "",
    sortByDeadline: false,
  });
  console.log(filters);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="filter-component">
      <h3>Filters</h3>
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={filters.degree}
          onChange={handleChange}
          placeholder="e.g. Masters"
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="e.g. Mumbai"
        />
      </div>
      <div>
        <label htmlFor="sortByDeadline">
          <input
            type="checkbox"
            id="sortByDeadline"
            name="sortByDeadline"
            checked={filters.sortByDeadline}
            onChange={handleChange}
          />
          Sort by Deadline
        </label>
      </div>
    </div>
  );
};

export default FilterComponent;
