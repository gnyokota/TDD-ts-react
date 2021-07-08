import { useState } from "react";

type Props = {
  title: string;
  options: string[];
};

const Dropdown = ({ title, options }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown-wrapper">
      <button onClick={handleClick}>{title}</button>

      {isOpen && (
        <ul>
          {options.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
