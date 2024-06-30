import React, { FC, useEffect } from "react";
import Logo from "../assets/images/logo.png";

import fetchWordData from "../utils/fetchWordData";

import FontsDropdownMenu from "./FontsDropdownMenu";
import ThemeSwitch from "./ThemeSwitch";

interface HeaderProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setWordDataResponse: React.Dispatch<React.SetStateAction<object>>;
}

const words = ["noun", "pronoun", "adjective", "verb"];

const Header: FC<HeaderProps> = ({ setIsLoading, setWordDataResponse }) => {
  function getWord() {
    setIsLoading(true);
    const interestingWord = words[Math.floor(Math.random() * words.length)];
    fetchWordData(interestingWord)
      .then((data: object) => {
        setIsLoading(false);
        setWordDataResponse(data);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getWord();
  }, []);

  return (
    <header>
      <img src={Logo} alt="logo" />

      <div className="options">
        <FontsDropdownMenu />
        <div className="separator"></div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
