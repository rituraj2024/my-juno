
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const data = props.data;
  const title = props.title;

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <div
      ref={dropdownRef}
      className="relative w-[142px] h-[36px] px-3 py-2 bg-neutral-100 rounded-[7px] inline-block text-left"
    >
      <div>
        <span className="cursor-pointer" onClick={toggleDropdown}>
          <div className='flex felx-row text-neutral-500 text-sm font-medium'>
            {selectedOption ? selectedOption.name : `${title}`}
            <IoIosArrowDown className="ml-1 absolute top-[12px] left-[120px]" />
          </div>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[142px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {data.map((option) => (
              <div
                key={option.id}
                className={`${
                  selectedOption === option ? 'bg-gray-100' : ''
                } cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:bg-opacity-10 `}
                onClick={() => selectOption(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
