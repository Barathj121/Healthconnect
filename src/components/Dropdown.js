import { useState } from 'react';
import "./Dropdown.css"

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">{selectedOption || 'Select'}</button>
      <ul className="dropdown-list">
        {options.map((option) => (
          <li key={option} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;