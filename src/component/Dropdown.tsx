import { useState } from "react";

type Props = {
  title: string;
  options: string[];
};

const Dropdown = ({ title, options }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [item, setItem] = useState<string>("");

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleSelect = (option: string) => {
    setItem(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-wrapper">
      <button onClick={handleClick}>{title}</button>

      {isOpen && (
        <ul role="menu">
          {options.map((item, i) => (
            <li role="menuitem" key={item} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}

      <p style={{ textAlign: "center" }}>You selected:</p>
      <h1 style={{ textAlign: "center" }} data-testid="selection-title">
        {item}
      </h1>
    </div>
  );
};

export default Dropdown;
