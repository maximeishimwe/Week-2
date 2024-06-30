import { FC, useCallback, useState } from "react";
import fetchWordData from "../utils/fetchWordData";

import SearchIcon from "../assets/images/search.png";

interface SearchBarProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setWordDataResponse: React.Dispatch<React.SetStateAction<object>>;
}

const SearchBar: FC<SearchBarProps> = ({
  isLoading,
  setIsLoading,
  setWordDataResponse,
}) => {
  const [query, setQuery] = useState<string>("");

  interface ErrorObject {
    value: boolean;
    message: string;
  }
  const [error, setError] = useState<ErrorObject>({
    value: false,
    message: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInput = e.target.value;

      // Only allow alphabets
      const regex = /^[a-zA-Z\s]*$/;
      if (newInput !== "" && !regex.test(newInput)) return;

      setQuery(newInput);
    },
    []
  );

  const handleSearch = useCallback(
    (e: React.FormEvent, word: string) => {
      e.preventDefault();

      if (word.trim() === "") {
        setError({ value: true, message: "Whoops, can't be empty." });
        return;
      }

      setIsLoading(true);
      fetchWordData(word)
        .then((data: object) => {
          setError({ value: false, message: "" });
          setIsLoading(false);
          setWordDataResponse(data);
          setQuery("");
        })
        .catch((err) => {
          setError({ value: true, message: "Whoops, something went wrong." });
          console.error(err);
          setIsLoading(false);
        });
    },
    [setIsLoading, setWordDataResponse]
  );

  return (
    <form
      className="search-bar-container"
      onSubmit={(e) => handleSearch(e, query)}
    >
      <div className="search-bar">
        <input
          className={error.value ? "error" : ""}
          type="text"
          placeholder="Search for a word..."
          value={query}
          onChange={handleInputChange}
        ></input>

        <button>
          <img src={SearchIcon} alt="search" />
        </button>
      </div>

      {error.value && <p className="error">{error.message}</p>}
      {isLoading && <div>fetching...</div>}
    </form>
  );
};

export default SearchBar;
