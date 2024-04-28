import React from "react";
import Select from "react-select";

function Dropdown({ options, onChange, placeholder }) {
  return (
    <div className="mb-4 bg-white">
      <Select
        options={options}
        className="w-full bg-white"
        placeholder={placeholder}
        onChange={onChange}
        isClearable={true}
        styles={{
          control: (provided, state) => ({
            ...provided,
            
            
            
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#4B566A" : "white", // Change background color of selected option
            "&:hover": {
              backgroundColor: "lightgray", // Change background color of hovered option
            },
          }),
          
        }}
      />
    </div>
  );
}

export default Dropdown;
