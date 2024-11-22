import React from "react";

interface FilterInputProps {
  filterText: string;
  onFilterText: (text: string) => void;
}

const FilterUsers: React.FC<FilterInputProps> = ({
  filterText,
  onFilterText,
}) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filterText}
      onChange={(e) => onFilterText(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "300px",
        marginBottom: "20px",
        fontSize: "16px",
      }}
    />
  );
};

export default FilterUsers;
