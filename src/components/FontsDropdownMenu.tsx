import { useState, useEffect, useRef, useContext } from "react";
import { FontContext } from "../context/FontContext";
import ArrowDown from "../assets/images/arrow-down.png";

const FontsDropdownMenu = () => {
  const fontContext = useContext(FontContext);
  if (!fontContext) {
    throw new Error("useFont must be used within a FontProvider");
  }
  const { selectedFont, setSelectedFont } = fontContext;

  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
  const toggleDropdownMenu = () => setShowDropdownMenu(!showDropdownMenu);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close dropdown menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdownMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fonts-dropdown-menu" ref={dropdownRef}>
      <button onClick={toggleDropdownMenu}>
        {selectedFont}
        <img src={ArrowDown} />
      </button>

      <ul className={`dropdown-menu ${showDropdownMenu ? "show" : "hide"}`}>
        <li onClick={() => setSelectedFont("Serif")}>Serif</li>

        <li onClick={() => setSelectedFont("Sans-serif")}>Sans-Serif</li>

        <li onClick={() => setSelectedFont("Mono")}>Mono</li>
      </ul>
    </div>
  );
};

export default FontsDropdownMenu;
