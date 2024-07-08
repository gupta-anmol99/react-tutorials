// There is another way to do React forward ref

import React, { useId } from "react";

function Select({ options = [], className = "", ...props }, ref) {
  const id = useId();

  return (
    <div>
      <select
        {...props}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select)
