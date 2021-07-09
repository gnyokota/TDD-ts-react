import { useState } from "react";

import "./Dropdown.css";

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
      <h1
        className={item}
        style={{ textAlign: "center" }}
        data-testid="selection-title"
      >
        {item === "Pikachu" && (
          <img
            src="https://icons.iconarchive.com/icons/hektakun/pokemon/72/025-Pikachu-icon.png"
            alt="pikachu-img"
          />
        )}
        {item === "Bulbasaur" && (
          <img
            src="https://icons.iconarchive.com/icons/hektakun/pokemon/72/001-Bulbasaur-icon.png"
            alt="Bulbasaur-img"
          />
        )}
        {item === "Charmander" && (
          <img
            src="https://icons.iconarchive.com/icons/hektakun/pokemon/72/004-Charmander-icon.png"
            alt="Charmander-img"
          />
        )}
        {item === "Squirtle" && (
          <img
            src="https://icons.iconarchive.com/icons/hektakun/pokemon/72/007-Squirtle-icon.png"
            alt="squirtle-img"
          />
        )}
      </h1>
    </div>
  );
};

export default Dropdown;
